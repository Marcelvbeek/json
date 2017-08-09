'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect('mongodb://' + _config2.default.mongoUser + ':' + _config2.default.mongoPass + '@ds129402.mlab.com:29402/jsontree');

var questionModel = _mongoose2.default.model('question', _schema2.default.question);
var userModel = _mongoose2.default.model('user', _schema2.default.user);

var models = {
    questionModel: questionModel,
    userModel: userModel
};

exports.default = models;
//# sourceMappingURL=index.js.map