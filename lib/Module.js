'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AddNewMesureToDataBase = exports.HelloWorld = exports.push = exports.insert = undefined;

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _mongodb = require('mongodb');

var mongodb = _interopRequireWildcard(_mongodb);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ObjectId = mongodb.ObjectId;
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:3001/meteor';

var insertDocument = function insertDocument(db, callback, recivedMsg) {
    db.collection('measurements').insertOne({ "text": recivedMsg }, function (err, result) {
        _assert2.default.equal(err, null);
        console.log("Inserted a document into the measurements collection.");
        callback();
    });
};

var pushDocument = function pushDocument(db, callback, recivedMsg) {
    db.collection('restaurants').update({ _id: 1 }, { $push: { LorRecivedMsg: recivedMsg } }, function (err, result) {
        _assert2.default.equal(err, null);
        console.log("Inserted a document into the restaurants collection.");
        callback();
    });
};

var insert = exports.insert = function insert(recivedMsg) {
    MongoClient.connect(url, function (err, db) {
        _assert2.default.equal(null, err);
        insertDocument(db, function () {
            db.close();
        }, recivedMsg);
    });
};

var push = exports.push = function push(recivedMsg) {
    MongoClient.connect(url, function (err, db) {
        _assert2.default.equal(null, err);
        pushDocument(db, function () {
            db.close();
        }, recivedMsg);
    });
};

var HelloWorld = exports.HelloWorld = function HelloWorld() {
    return console.log('Welcome to lora server');
};

var AddNewMesureToDataBase = exports.AddNewMesureToDataBase = function AddNewMesureToDataBase() {
    return console.log('Add new mesure');
};