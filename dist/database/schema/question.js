'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var question = new _mongoose.Schema({
    id: Number,
    title: String,
    answers: [{
        id: Number,
        title: String,
        ref: Number
    }]
});

exports.default = question;
//# sourceMappingURL=question.js.map