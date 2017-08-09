'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _routing = require('./routing');

var _routing2 = _interopRequireDefault(_routing);

var _setupUsers = require('./auth/setupUsers');

var _setupUsers2 = _interopRequireDefault(_setupUsers);

var _authController = require('./auth/authController');

var _authController2 = _interopRequireDefault(_authController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authController = new _authController2.default();

var app = (0, _express2.default)();
var config = {};
app.server = _http2.default.createServer(app

// parse application/json
);app.use(_bodyParser2.default.json({}));

var router = require('./routing');

app.use('/api/private', authController.verifyToken);
app.use('/api/private', _routing2.default.private());
app.use('/api/public', _routing2.default.public());

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
}

//userSetter.setUsers();

);exports.default = app;
//# sourceMappingURL=index.js.map