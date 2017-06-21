import mongoose from 'mongoose';
import schema from './schema';
import config from './config';

mongoose.connect('mongodb://' + config.mongoUser + ':' + config.mongoPass + '@ds129402.mlab.com:29402/jsontree');

const questionModel = mongoose.model('question', schema.question);

const models = {
    questionModel: questionModel
}

export default models;