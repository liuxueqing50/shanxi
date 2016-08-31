var log4js = require('log4js');
log4js.configure({
    appenders: [
        {   //控制台输出debug
            type: 'console',
            category: "console"
        },
        {   //每日日志
            "type": "dateFile",
            filename: 'logs/daily/daily.log',
            "pattern": "-yyyy-MM-dd",
            "category": "http"
        },
        {   //用户登录日志
            type: 'file',
            filename: 'logs/users/login.log',
            maxLogSize: 1024 * 500,
            backups: 4,
            category: 'usersLoginLog'
        },
        {   //用户操作日志
            type: 'file',
            filename: 'logs/users/operation.log',
            maxLogSize: 1024 * 500,
            backups: 4,
            category: 'usersOperationLog'
        },
        {   //系统错误日志
            "type": "logLevelFilter",
            "level": "ERROR",
            "appender": {
                "type": "file",
                "filename": "logs/errors/errors.log"
            }
        }
    ],
    replaceConsole: true
});

var console = log4js.getLogger('console');
var http = log4js.getLogger('http');
var errors = log4js.getLogger('errors');
var usersLoginLog = log4js.getLogger('usersLoginLog');
var usersOperationLog = log4js.getLogger('usersOperationLog');

exports.usersLoginLog = usersLoginLog;
exports.usersOperationLog = usersOperationLog;

exports.use = function (app) {
    //页面请求日志,用auto的话,默认级别是WARN  
    //app.use(log4js.connectLogger(dateFileLog, {level:'auto', format:':method :url'}));
    app.use(log4js.connectLogger(console, {level: 'debug', format: ':method :url'}));
    app.use(log4js.connectLogger(http, {level: 'auto', format: ':method :url'}));
};