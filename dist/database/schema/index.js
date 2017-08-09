'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

var _question = require('./question');

var _question2 = _interopRequireDefault(_question);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = {
    user: _users2.default,
    question: _question2.default
};

exports.default = schema;
//# sourceMappingURL=index.js.map