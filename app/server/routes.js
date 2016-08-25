var AM = require('./modules/account-manager');
var EM = require('./modules/email-dispatcher');
var PSI = require('./modules/project-site-info');
var RP = require('./modules/role-pemission');

var svgCaptcha = require('svg-captcha');
var usersOperationLog = require('../../config/log4js').usersOperationLog;
var _ = require("underscore")._;

var auth = function (req, res, next) {
    var routePath = req.route.path;
    if (req.session.user) {
        if (req.session.user.Role) {
            try {
                var pemissionRoutesArry = req.session.user.Role.pemission[0].page;
                console.log(routePath);//   /user/monitor/:ProjectID/:SiteID
                //console.log(pemissionRoutesArry);
                if (pemissionRoutesArry[0] == "$all") {
                    next();
                } else {
                    console.log(_.contains(pemissionRoutesArry, routePath));
                    if (_.contains(pemissionRoutesArry, routePath)) {
                        next();
                    } else {
                        console.log("用户没有权限访问此网页");
                        res.render('error-404.html', {
                            title: '您没有权限访问此网页',
                            topNavData: {},
                            udata: req.session.user
                        })
                    }
                }

            } catch (err) {
                console.log(err)
            }
        } else {
            res.render('error-404.html', {
                title: '用户角色未分配！',
                topNavData: {},
                udata: req.session.user
            })
        }
    } else {
        console.log("用户未登陆");
        res.redirect('/login');
    }
};


module.exports = function (app) {

    var leftNavDatas = {};

    var topNavData = [
        {
            "NavName": "音频监听",
            "link": "/"
        },
        {
            "NavName": "地图主页",
            "link": "/map"
        },
        {
            "NavName": "报警列表",
            "link": "/alert"
        },
        {
            "NavName": "音频测试",
            "link": "/test"
        },
        {
            "NavName": "websocket测试",
            "link": "/stest"
        }
    ];

    /**
     * 网站业务应用路由集合
     */

// GET // main login page //
    app.get('/', function (req, res) {
        if (req.session.user) {
            //查询初始化信息
            PSI.findLeftNavDatas(function (e) {
                leftNavDatas = e;
                res.redirect('/user/monitor/' + leftNavDatas[0].projID + '/' + leftNavDatas[0].sites[0].siteID);
            });
        } else {
            // check if the user's credentials are saved in a cookie //
            if (req.cookies.user == undefined || req.cookies.pass == undefined) {
                res.redirect('/login');
            } else {
                // attempt automatic login //
                AM.autoLogin(req.cookies.user, req.cookies.pass, function (o) {
                    if (o != null) {
                        req.session.user = o;
                        res.redirect('/user/monitor/' + leftNavDatas[0].projID + '/' + leftNavDatas[0].sites[0].siteID);
                    } else {
                        res.render('login', {title: '登录 - 请先登录'});
                    }
                });
            }
        }
    });

// GET // login page //
    app.get('/login', function (req, res) {
        if (req.session.user == null) {
            // if user is not logged-in redirect back to login page //
            res.render('login.html', {
                title: '平台登录',
                udata: req.session.user
            });

        } else {
            res.redirect('/');
        }
    });

    // POST // login //
    app.post('/login', function (req, res) {
        AM.manualLogin(req.body['user'], req.body['pass'], function (e, o) {
            if (!o) {
                res.status(400).send(e);
            } else {
                req.session.user = o;
                if (req.body['remember-me'] == 'on') {
                    res.cookie('user', o.user, {maxAge: 3600 * 24 * 7});
                    res.cookie('pass', o.pass, {maxAge: 3600 * 24 * 7});

                    RP.getPemissionByUser(req.session.user.user, function (result) {
                        req.session.user.Role = result[0];
                        usersOperationLog.info("用户: [" + req.session.user.user + "] 进行了 " + "[登录] 操作");
                        res.redirect('/');
                    });
                } else {
                    RP.getPemissionByUser(req.session.user.user, function (result) {
                        req.session.user.Role = result[0];
                        usersOperationLog.info("用户: [" + req.session.user.user + "] 进行了 " + "[登录] 操作");
                        res.redirect('/');
                    });
                }
            }
        });
    });

// GET // monitor page by ProID and SiteID //
    app.get('/user/monitor/:ProjectID/:SiteID', auth, function (req, res, next) {

        //查询初始化信息
        PSI.findLeftNavDatas(function (e) {
            var leftNavDatas = e;
            if (!req.session.user) {
                // if user is not logged-in redirect back to login page //
                res.redirect('/login');
            } else {
                var currentProjectID = req.params.ProjectID;
                var currentSiteID = req.params.SiteID;
                PSI.findDataByProIdAndSiteId(currentProjectID, currentSiteID, function (e) {
                    res.render('index', {
                        title: '测试页面',
                        currentProjectID: currentProjectID,
                        currentSiteID: currentSiteID,
                        leftNavDatas: leftNavDatas,
                        mainDatas: e,
                        topNavData: topNavData,
                        udata: req.session.user
                    });
                });
            }
        });
    });


// GET // logout //
    app.get('/logout', function (req, res) {
        res.clearCookie('user');
        res.clearCookie('pass');
        req.session.user = null;
        req.session.destroy(function (e) {
            res.redirect('/');
        });
    });

// POST // creating new accounts //
    app.post('/admin/user/addUser', function (req, res) {

    });

// POST // check the user by email account whether actually exists //
    app.post('/admin/user/checkConfirm', function (req, res) {
        AM.getAccountByEmail(req.body['email'], function (o) {
            if (o) {
                res.write("false");
                res.end()
            } else {
                res.write("true");
                res.end()
            }
        });
    });

// GET // get the svg captcha code //
    app.get('/captcha', function (req, res) {
        var text = svgCaptcha.randomText();
        var captcha = svgCaptcha(text);
        req.session.captcha = text;
        res.set('Content-Type', 'image/svg+xml');
        res.status(200).send(captcha);
    });

// POST // confirm the svg captcha code //
    app.post('/captcha', function (req, res) {
        var iptCaptchaTest = req.body['captcha'].toUpperCase();
        var currentCaptchaTest = req.session.captcha.toUpperCase();
        if (iptCaptchaTest == currentCaptchaTest) {
            res.write("true");
            res.end()
        } else {
            res.write("false");
            res.end()
        }
    });


    /**
     * 网站后台管理业务路由集合
     */


// GET // admin page - dashboard //
    app.get('/admin', function (req, res) {
        res.render('./admin/index', {
            title: "管理后台",
            udata: req.session.user
        });
    });

// GET // admin page - user //
    app.get('/admin/user', function (req, res) {
        res.render('./admin/user', {
            title: "管理后台",
            udata: req.session.user
        });
    });

// GET // admin - user  - api - getAllRecords //
    app.get('/admin/user/getAllRecords', function (req, res) {
        AM.getAllRecords(function (err, result) {
            res.json(result);
            res.end();
        })
    });

// GET // admin page - addUser //
    app.get('/admin/user/addUser', function (req, res) {
        res.render('./admin/addUser', {
            title: "管理后台",
            udata: req.session.user
        });
    });


// POST // admin - user - api - updateAccount //
    app.post('/admin/user/updateAccount', auth, function (req, res) {
        var oper = req.body['oper']; //获得操作方式
        if (oper == "edit") {
            if (!req.body['_id']) res.write("false");
            if (!req.body['user']) res.write("false");
            if (!req.body['name']) res.write("false");
            if (!req.body['role']) res.write("false");
            var _id = req.body['_id'];
            var user = req.body['user'];
            var email = req.body['user'];
            var name = req.body['name'];
            var role = req.body['role'];
            AM.getAccountByEmail(email, function (o) {
                if (!o) {
                    res.write("false");
                    res.end()
                } else {
                    AM.updateAccount({
                        _id: _id,
                        email: email,
                        name: name,
                        user: user,
                        role: role
                        //creator: req.body['creator']

                    }, function (e) {
                        if (e) {
                            res.write("false");
                            res.end()
                        } else {
                            res.write("true");
                            res.end()
                        }
                    });
                }
            });
        } else if (oper == "del") {
            if (!req.body['id']) res.write("false");
            console.log(oper);
            AM.deleteAccount(req.body['id'], function (e) {
                if (e) {
                    res.write("false");
                    res.end()
                } else {
                    res.write("true");
                    res.end()
                }
            });
        }
    });

// GET // admin page - role //
    app.get('/admin/role', function (req, res) {
        res.render('./admin/role', {
            title: "管理后台",
            udata: req.session.user
        });
    });

// GET // admin - role  - api - getAllRecords //
    app.get('/admin/role/getAllRecords', function (req, res) {
        RP.getAllRecords(function (err, result) {
            res.json(result);
            res.end();
        })
    });

// POST // admin - role - api - updateRole //
    app.post('/admin/role/updateRole', auth, function (req, res) {
        if (!req.body['id']) res.write("false");
        RP.deleteRole(req.body['id'], function (e) {
            if (e) {
                res.write("false");
                res.end()
            } else {
                res.write("true");
                res.end()
            }
        });
    });

// GET // admin page - addRole //
    app.get('/admin/role/addRole', function (req, res) {
        res.render('./admin/addRole', {
            title: "管理后台",
            udata: req.session.user
        });
    });

// GET // admin page - log -login //
    app.get('/admin/log/login/', function (req, res) {
        res.render('./admin/log-login.html', {
            title: "管理后台-登陆日志管理",
            udata: req.session.user
        });
    });

// GET // admin page - log -operation //
    app.get('/admin/log/operation/', function (req, res) {
        res.render('./admin/log-operation.html', {
            title: "管理后台-操作日志管理",
            udata: req.session.user
        });
    });

// GET // admin page - setting //
    app.get('/admin/setting', function (req, res) {
        res.render('./admin/setting', {
            title: "管理后台",
            udata: req.session.user
        });
    });

// GET // 404 page //
    app.get('*', function (req, res) {
        res.render('error-404.html', {
            title: 'Page Not Found',
            topNavData: topNavData,
            udata: req.session.user
        })
    });

// password reset //

    //app.post('/lost-password', function (req, res) {
    //    // look up the user's account via their email //
    //    AM.getAccountByEmail(req.body['email'], function (o) {
    //        if (o) {
    //            EM.dispatchResetPasswordLink(o, function (e, m) {
    //                // this callback takes a moment to return //
    //                // TODO add an ajax loader to give user feedback //
    //                if (!e) {
    //                    res.status(200).send('ok');
    //                } else {
    //                    for (k in e) console.log('ERROR : ', k, e[k]);
    //                    res.status(400).send('unable to dispatch password reset');
    //                }
    //            });
    //        } else {
    //            res.status(400).send('email-not-found');
    //        }
    //    });
    //});

    //app.get('/reset-password', function (req, res) {
    //    var email = req.query["e"];
    //    var passH = req.query["p"];
    //    AM.validateResetLink(email, passH, function (e) {
    //        if (e != 'ok') {
    //            res.redirect('/');
    //        } else {
    //            // save the user's email in a session instead of sending to the client //
    //            req.session.reset = {email: email, passHash: passH};
    //            res.render('reset', {title: 'Reset Password'});
    //        }
    //    })
    //});

    //app.post('/reset-password', function (req, res) {
    //    var nPass = req.body['pass'];
    //    // retrieve the user's email from the session to lookup their account and reset password //
    //    var email = req.session.reset.email;
    //    // destory the session immediately after retrieving the stored email //
    //    req.session.destroy();
    //    AM.updatePassword(email, nPass, function (e, o) {
    //        if (o) {
    //            res.status(200).send('ok');
    //        } else {
    //            res.status(400).send('unable to update password');
    //        }
    //    })
    //});

// view & delete accounts //

    //app.get('/print', function (req, res) {
    //    AM.getAllRecords(function (e, accounts) {
    //        res.render('print', {title: 'Account List', accts: accounts});
    //    })
    //});
    //
    //app.get('/reset', function (req, res) {
    //    AM.delAllRecords(function () {
    //        res.redirect('/print');
    //    });
    //});
};