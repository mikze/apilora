'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.read = undefined;

var _readline = require('readline');

var _readline2 = _interopRequireDefault(_readline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rl = _readline2.default.createInterface({
    input: process.stdin,
    output: process.stdout
});

var read = exports.read = function read(cb) {
    rl.on('line', function (input) {
        return cb(input);
    });
};