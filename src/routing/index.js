import {Router} from 'express'
import dbMapper from './dbMapper'

const dbmapper = new dbMapper();

export default ({ config }) => {
	let api = Router();
    
	api.post('/getref', dbmapper.getRef)

    api.post('/questions', dbmapper.getAll)
	
	api.get('/questions/:id', dbmapper.getOne)

	api.put('/questions/:id', dbmapper.edit)

    api.post('/new', dbmapper.addNew)

	return api;
}