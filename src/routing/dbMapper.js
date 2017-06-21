import models from '../database/index'
const database = require("../database")

class dbMapper {
    constructor() {

    }

    getRef(req, res) {
        models.questionModel.findOne({'id': req.body.id}, (err, foundQuestion) => {
            const ref = foundQuestion.answers.find(answer => {
                if(answer.id == req.body.answerId) {
                    return true
                }
            })
            models.questionModel.findOne({'id': ref.ref}, (err, found) => {
                return res.json(found); 
            });
        })
    }

    getOne(req, res) {
        models.questionModel.findOne({'id': req.params.id}, (err, foundQuestion) => {
            return res.json(foundQuestion); 
        })
    }

    edit(req, res) {
        models.questionModel.findOne({'id': req.params.id}, (err, foundQuestion) => {
            foundQuestion = Object.assign(foundQuestion, req.body);

            foundQuestion.save(function (err, updatedQuestion) {
                if (err) return handleError(err);
                res.send(updatedQuestion);
            });
        })
    }

    getAll(req, res) {
        models.questionModel.find((err, result) => {
            return res.json(result)
        })
    }

    addNew(req, res) {
        req.body.forEach(question => {
            var question = new models.questionModel({
                id: question.id,
                title: question.title,
                answers: question.answers
            })

            question.save();
        })
        return res.json('succesfull updated');
    }
    
}

export default dbMapper