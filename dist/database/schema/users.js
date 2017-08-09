'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var user = new _mongoose.Schema({
    name: String,
    username: String,
    password: String,
    role: Number
});

exports.default = user;
//# sourceMappingURL=users.js.map