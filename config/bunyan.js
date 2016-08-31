/* ********************************************** 日志模块 **************************************************** */

/**
 * 加载模块，并初始化模块
 */

var bunyan= require('bunyan');
var loginLog = bunyan.createLogger({
    name: '登陆日志',
    streams: [{
        path: 'logs/login.log'
        // `type: 'file'` is implied
    }]
});

exports.loginLog = loginLog;