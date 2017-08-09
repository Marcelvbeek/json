'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _questionController = require('../controllers/questionController');

var _questionController2 = _interopRequireDefault(_questionController);

var _authController = require('../auth/authController');

var _authController2 = _interopRequireDefault(_authController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var questionController = new _questionController2.default();
var authController = new _authController2.default();

var api = {
	public: function _public() {
		var publicRouter = (0, _express.Router)();

		publicRouter.post('/account/login', authController.login);

		publicRouter.post('/account/add', authController.addAcount);

		return publicRouter;
	},
	private: function _private() {
		var privateRouter = (0, _express.Router)();

		privateRouter.post('/getref', questionController.getRef);

		privateRouter.post('/questions', questionController.getAll);

		privateRouter.get('/questions/:id', questionController.getOne);

		privateRouter.put('/questions/:id', questionController.edit);

		privateRouter.post('/new', questionController.addNew);

		return privateRouter;
	}
};

exports.default = api;
//# sourceMappingURL=index.js.map