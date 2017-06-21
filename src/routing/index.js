import {Router} from 'express'
import dbMapper from './dbMapper'

const dbmapper = new dbMapper();

export default ({ config }) => {
	let api = Router();
    
	api.post('/getref', dbmapper.getRef)

    api.post('/all', dbmapper.getAll)

    api.post('/new', dbmapper.addNew)

	return api;
}