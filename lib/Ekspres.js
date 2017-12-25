'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RunExpress = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var RunExpress = exports.RunExpress = function RunExpress(info, Serial, port) {
  app.get('/', function (req, res) {
    res.send(info);
  });

  var jsonParser = _bodyParser2.default.json();
  var urlencodedParser = _bodyParser2.default.urlencoded({ extended: false });

  app.post('/', jsonParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    res.send('welcome, ' + req.body.xD);
    console.log('welcome, ' + req.body.xD);
    Serial(String(req.body.xD));
  });

  app.listen(port, console.log('Express ON'));
};