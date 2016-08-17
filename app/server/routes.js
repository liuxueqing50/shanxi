var AM = require('./modules/account-manager');
var EM = require('./modules/email-dispatcher');
var PSI = require('./modules/project-site-info');

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

// main login page //
    app.get('/', function (req, res) {
        if (req.session.user) {

            //查询初始化信息
            PSI.findLeftNavDatas(function (e) {
                leftNavDatas = e;
                res.redirect('/site/' + leftNavDatas[0].projID + '/' + leftNavDatas[0].sites[0].siteID);
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
                        res.redirect('/site/' + leftNavDatas[0].projID + '/' + leftNavDatas[0].sites[0].siteID);
                    } else {
                        res.render('login', {title: '登录 - 请先登录'});
                    }
                });
            }
        }
    });

// login //

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

    app.post('/login', function (req, res) {
        AM.manualLogin(req.body['user'], req.body['pass'], function (e, o) {
            if (!o) {
                res.status(400).send(e);
            } else {
                req.session.user = o;
                if (req.body['remember-me'] == 'on') {
                    res.cookie('user', o.user, {maxAge: 3600 * 24 * 7});
                    res.cookie('pass', o.pass, {maxAge: 3600 * 24 * 7});
                }
                res.redirect('/');
            }
        });
    });

// logged-in user sitePage //
    app.get('/site/:ProjectID/:SiteID', function (req, res, next) {

        if (req.session.user == null) {
            // if user is not logged-in redirect back to login page //
            res.render('login.html', {
                title: '平台登录',
                udata: req.session.user
            });
        } else {
            var currentProjectID = req.params.ProjectID;
            var currentSiteID = req.params.SiteID;
            
            PSI.findDataByProIdAndSiteId(currentProjectID, currentSiteID, function(e) {
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


// logged-in user logout //

    app.get('/logout', function (req, res) {
        res.clearCookie('user');
        res.clearCookie('pass');
        req.session.user = null;
        req.session.destroy(function (e) {
            res.redirect('/');
        });
    });

// creating new accounts //

    app.post('/signup', function (req, res) {
        AM.addNewAccount({
            name: req.body['name'],
            email: req.body['email'],
            user: req.body['email'],
            pass: req.body['pass']
        }, function (e) {
            if (e) {
                res.status(400).send(e);
            } else {
                res.status(200).send('ok');
            }
        });
    });

// password reset //

    app.post('/lost-password', function (req, res) {
        // look up the user's account via their email //
        AM.getAccountByEmail(req.body['email'], function (o) {
            if (o) {
                EM.dispatchResetPasswordLink(o, function (e, m) {
                    // this callback takes a moment to return //
                    // TODO add an ajax loader to give user feedback //
                    if (!e) {
                        res.status(200).send('ok');
                    } else {
                        for (k in e) console.log('ERROR : ', k, e[k]);
                        res.status(400).send('unable to dispatch password reset');
                    }
                });
            } else {
                res.status(400).send('email-not-found');
            }
        });
    });

    app.get('/reset-password', function (req, res) {
        var email = req.query["e"];
        var passH = req.query["p"];
        AM.validateResetLink(email, passH, function (e) {
            if (e != 'ok') {
                res.redirect('/');
            } else {
                // save the user's email in a session instead of sending to the client //
                req.session.reset = {email: email, passHash: passH};
                res.render('reset', {title: 'Reset Password'});
            }
        })
    });

    app.post('/reset-password', function (req, res) {
        var nPass = req.body['pass'];
        // retrieve the user's email from the session to lookup their account and reset password //
        var email = req.session.reset.email;
        // destory the session immediately after retrieving the stored email //
        req.session.destroy();
        AM.updatePassword(email, nPass, function (e, o) {
            if (o) {
                res.status(200).send('ok');
            } else {
                res.status(400).send('unable to update password');
            }
        })
    });

// view & delete accounts //

    app.get('/print', function (req, res) {
        AM.getAllRecords(function (e, accounts) {
            res.render('print', {title: 'Account List', accts: accounts});
        })
    });

    app.post('/delete', function (req, res) {
        AM.deleteAccount(req.body.id, function (e, obj) {
            if (!e) {
                res.clearCookie('user');
                res.clearCookie('pass');
                req.session.destroy(function (e) {
                    res.status(200).send('ok');
                });
            } else {
                res.status(400).send('record not found');
            }
        });
    });

    app.get('/reset', function (req, res) {
        AM.delAllRecords(function () {
            res.redirect('/print');
        });
    });


    app.get('*', function (req, res) {
        res.render('error-404.html', {
            title: 'Page Not Found',
            topNavData: topNavData,
            udata: req.session.user
        })
    });

}