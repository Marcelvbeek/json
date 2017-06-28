import {Router} from 'express'
import QuestionController from '../controllers/questionController'
import AuthController from '../auth/authController'
const questionController = new QuestionController()
const authController = new AuthController();

const api = {
	public: () => {
		const publicRouter = Router()
		
		publicRouter.post('/account/login', authController.login)

		publicRouter.post('/account/add', authController.addAcount)

		return publicRouter
	}, 
	private: () => {
		const privateRouter = Router()
		
		privateRouter.post('/getref', questionController.getRef)

		privateRouter.post('/questions', questionController.getAll)
		
		privateRouter.get('/questions/:id', questionController.getOne)

		privateRouter.put('/questions/:id', questionController.edit)

		privateRouter.post('/new', questionController.addNew)

		return privateRouter
	}
}

export default api