'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _readline = require('readline');

var _readline2 = _interopRequireDefault(_readline);

var _Serial = require('./Serial.js');

var Serial = _interopRequireWildcard(_Serial);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rl = _readline2.default.createInterface({
  input: process.stdin,
  output: process.stdout
});

var token = '';
var serial = '';
console.log("Prosze podac serial >");

function getSerial() {
  return new Promise(function (resolve) {
    rl.question('Podaj serial ', function (serial) {
      resolve(serial);
    });
  });
}

function getToken(serial) {
  return new Promise(function (resolve) {
    rl.question('Podaj Token ', function (token) {
      resolve([serial, token]);
    });
  });
}

function startSeria(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      _serial = _ref2[0],
      _token = _ref2[1];

  Serial.startSerial(_serial, _token);
}

getSerial().then(getToken).then(startSeria);