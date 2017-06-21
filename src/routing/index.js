import {Router} from 'express'
import QuestionController from '../controllers/questionController'

const questionController = new QuestionController();

export default ({ config }) => {
	let api = Router();
    
	api.post('/getref', questionController.getRef)

    api.post('/questions', questionController.getAll)
	
	api.get('/questions/:id', questionController.getOne)

	api.put('/questions/:id', questionController.edit)

    api.post('/new', questionController.addNew)

	return api;
}