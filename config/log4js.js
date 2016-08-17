/**
 * Created by Liuwei on 2016/8/12.
 */
var log4js = require("log4js");

log4js.configure({
    appenders: [
        { type: 'console' },{
            type: 'file',
            filename: 'logs/access.log',
            maxLogSize: 1024,
            backups:4,
            category: 'normal'
        }
    ],
    replaceConsole: true
});

module.exports = log4js;