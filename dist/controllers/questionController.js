'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('../database/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var questionController = function () {
    function questionController() {
        _classCallCheck(this, questionController);
    }

    _createClass(questionController, [{
        key: 'getRef',
        value: function getRef(req, res) {
            _index2.default.questionModel.findOne({ 'id': req.body.id }, function (err, foundQuestion) {
                var ref = foundQuestion.answers.find(function (answer) {
                    if (answer.id == req.body.answerId) {
                        return true;
                    }
                });
                _index2.default.questionModel.findOne({ 'id': ref.ref }, function (err, found) {
                    return res.json(found);
                });
            });
        }
    }, {
        key: 'getOne',
        value: function getOne(req, res) {
            _index2.default.questionModel.findOne({ 'id': req.params.id }, function (err, foundQuestion) {
                return res.json(foundQuestion);
            });
        }
    }, {
        key: 'edit',
        value: function edit(req, res) {
            _index2.default.questionModel.findOne({ 'id': req.params.id }, function (err, foundQuestion) {
                foundQuestion = Object.assign(foundQuestion, req.body);

                foundQuestion.save(function (err, updatedQuestion) {
                    if (err) return handleError(err);
                    res.send(updatedQuestion);
                });
            });
        }
    }, {
        key: 'getAll',
        value: function getAll(req, res) {
            _index2.default.questionModel.find(function (err, result) {
                return res.json(result);
            });
        }
    }, {
        key: 'addNew',
        value: function addNew(req, res) {
            req.body.forEach(function (question) {
                var question = new _index2.default.questionModel({
                    id: question.id,
                    title: question.title,
                    answers: question.answers
                });

                question.save();
            });
            return res.json('succesfull updated');
        }
    }]);

    return questionController;
}();

exports.default = questionController;
//# sourceMappingURL=questionController.js.map