'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startSerial = undefined;

var _serialport = require('serialport');

var _serialport2 = _interopRequireDefault(_serialport);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parsers = _serialport2.default.parsers;

var token = '';
var id = '';
var dataName = '';
var device = '';
var x = 1;
var y = 1;
var l = 1;
var a = 1;
var jojo = 333;
var makeRequest = function makeRequest(xD) {

  if (token !== '') {

    var captured = xD.split("#");
    id = captured[1];
    device = captured[2];
    dataName = captured[3];

    a = Number(captured[5]);
    l = Number(captured[4]);
    x = Number(captured[6]);
    y = Number(captured[7]);

    console.log(id);
    console.log(device);
    console.log(dataName);
    console.log(a);
    console.log(l);
    console.log(x);
    console.log(y);

    var body = {
      token: token,
      id: id,
      dataName: dataName,
      device: device,
      x: x,
      y: y,
      l: l,
      a: a
    };

    var options = {
      hostname: 'localhost',
      port: 3000,
      path: '/hello',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    var req = _http2.default.request(options, function (res) {

      res.setEncoding('utf8');
      res.on('data', function (body) {});
    });

    req.on('error', function (e) {
      console.log('problem with request: ' + e.message);
    });
    // write data to request body
    req.write(JSON.stringify(body));
    req.end();
  }
};

var parser = new parsers.Readline({
  delimiter: '\r\n'
});

parser.on('data', makeRequest);

var startSerial = exports.startSerial = function startSerial(serial, newToken) {
  token = newToken;
  var port = new _serialport2.default(serial, {
    baudRate: 9600
  });

  port.pipe(parser);

  port.on('open', function () {
    return console.log('Port open');
  });
  console.log("serialport set to: ", serial);
  console.log("Token set to: ", token);
};