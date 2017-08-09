'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('../database/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// create a sample user

var users = [{
    name: 'Nick Cerminara',
    username: 'Nick',
    password: 'password',
    role: 1
}, {
    name: 'Marcel van Beek',
    username: 'Marcel',
    password: 'am77ar85',
    role: 1
}];

var userSetter = {
    setUsers: function setUsers() {
        users.forEach(function (user) {
            var newUser = new _index2.default.userModel(user);
            newUser.save();

            console.log('User saved successfully');
        });
    }
};

exports.default = userSetter;
//# sourceMappingURL=setupUsers.js.map