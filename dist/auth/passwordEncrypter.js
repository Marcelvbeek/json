'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _md = require('md5');

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var passwordEncrypter = function () {
    function passwordEncrypter() {
        _classCallCheck(this, passwordEncrypter);
    }

    _createClass(passwordEncrypter, [{
        key: 'encrypt',
        value: function encrypt(pass) {
            return (0, _md2.default)(pass);
        }
    }, {
        key: 'compare',
        value: function compare(pass, hash) {
            if ((0, _md2.default)(pass) == hash) {
                return true;
            } else {
                return false;
            }
        }
    }]);

    return passwordEncrypter;
}();

exports.default = passwordEncrypter;
//# sourceMappingURL=passwordEncrypter.js.map