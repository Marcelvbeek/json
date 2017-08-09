'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = require('../database/config');

var _config2 = _interopRequireDefault(_config);

var _index = require('../database/index');

var _index2 = _interopRequireDefault(_index);

var _passwordEncrypter = require('./passwordEncrypter');

var _passwordEncrypter2 = _interopRequireDefault(_passwordEncrypter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var jwt = require('jsonwebtoken');


var passwordEncrypter = new _passwordEncrypter2.default();

function getToken(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
        return req.query.token;
    } else if (req.body && req.body.token) {
        return req.body.token;
    } else if (req.headers['x-access-token']) {
        return req.headers['x-access-token'];
    }
    return null;
}

var authController = function () {
    function authController() {
        _classCallCheck(this, authController);
    }

    _createClass(authController, [{
        key: 'addAcount',
        value: function addAcount(req, res) {
            _index2.default.userModel.find({ 'username': req.body.username }, function (err, users) {
                if (users && users.length) {
                    res.json({
                        'error': 'User with username ' + req.body.username + ' found'
                    });
                } else {
                    if (req.body.username && req.body.password && req.body.name) {
                        var newUser = new _index2.default.userModel({
                            name: req.body.name,
                            username: req.body.username,
                            password: passwordEncrypter.encrypt(req.body.password),
                            role: 1
                        });
                        newUser.save

                        // if user is found and password is right
                        // create a token
                        ();var token = jwt.sign({
                            data: newUser
                        }, _config2.default.secret, {
                            expiresIn: 60 * 60
                        });

                        // return the information including token as JSON
                        res.json({
                            success: true,
                            message: 'Enjoy your token!',
                            token: token
                        });
                    } else {
                        res.json({
                            'error': 'Check if everything is filled correctly'
                        });
                    }
                }
            });
        }
    }, {
        key: 'verifyToken',
        value: function verifyToken(req, res, next) {

            var token = getToken(req

            // decode token
            );if (token) {

                jwt.verify(token, _config2.default.secret, function (err, decoded) {
                    if (err) {
                        return res.json({ success: false, message: 'Failed to authenticate token.' });
                    } else {
                        // if everything is good, save to request for use in other routes
                        req.decoded = decoded;
                        next();
                    }
                });
            } else {

                // if there is no token
                // return an error
                return res.status(403).send({
                    success: false,
                    message: 'No token provided.'
                });
            }
        }
    }, {
        key: 'login',
        value: function login(req, res) {
            _index2.default.userModel.findOne({
                username: req.body.username
            }, function (err, user) {

                if (err) throw err;

                if (!user) {
                    res.json({ success: false, message: 'Authentication failed. User not found.' });
                } else if (user) {

                    // check if password matches
                    if (!passwordEncrypter.compare(req.body.password, user.password)) {
                        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
                    } else {

                        // if user is found and password is right
                        // create a token
                        var token = jwt.sign({
                            data: user
                        }, _config2.default.secret, {
                            expiresIn: 60 * 60
                        });

                        // return the information including token as JSON
                        res.json({
                            success: true,
                            message: 'Enjoy your token!',
                            token: token
                        });
                    }
                }
            });
        }
    }]);

    return authController;
}();

exports.default = authController;
//# sourceMappingURL=authController.js.map