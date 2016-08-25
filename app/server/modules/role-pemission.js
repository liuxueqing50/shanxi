var MongoDB = require('mongodb').Db;
var Server = require('mongodb').Server;
var config = require("../../../config/config");

var dbName = config.mongodb.dbName;
var dbHost = config.mongodb.dbHost;
var dbPort = config.mongodb.dbPort;

var db = new MongoDB(dbName, new Server(dbHost, dbPort, {auto_reconnect: true}), {w: 1});
db.open(function (e, d) {
    if (e) {
        console.log(e);
    } else {
        if (process.env.NODE_ENV == 'live') {
            db.authenticate(process.env.DB_USER, process.env.DB_PASS, function (e, res) {
                if (e) {
                    console.log('mongo :: error: not authenticated', e);
                }
                else {
                    console.log('mongo :: authenticated and connected to database :: "' + dbName + '"');
                }
            });
        } else {
            console.log('mongo :: connected to database :: "' + dbName + '"');
        }
    }
});

var accounts = db.collection('accounts');
var Role = db.collection('Role');
var accessAndResource = db.collection('accessAndResource');

exports.getIdByUser = function (user, callback) {
    accounts.find({"user": user}, {_id: 1}).toArray(function (err, o) {
        if(err) callback(err);
        if(o) {
            callback(o)
        }
    })
};


exports.getPemissionByUser = function (user, callback) {
    accounts.find({"user": user}, {_id: 1}).toArray(function (err, o) {
        if (o) {
            var _id = o[0]._id;
            Role.find({"users._id": _id + ""}, {_id: 0, users: 0}).toArray(function (err, o) {
                if (o) {
                    callback(o)
                } else {
                    callback(null)
                }
            });


        } else {
            callback(null)
        }
    })
};

exports.getRoleResourceByRoleName = function (name, callback) {
    Role.findOne({"name":name}, function (err, o) {
        if (err) {
            callback(null);
        }
        if (!o) {
            callback(null)
        } else {
            callback(o)
        }
    })
};

exports.getAllRecords = function (callback) {
    Role.find().toArray(function (e, res) {
        if (e) callback(e);
        else callback(null, res);
    });
};

exports.deleteRole = function (id, callback) {
    Role.remove({_id: getObjectId(id)}, callback);
};
