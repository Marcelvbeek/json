import { Schema } from 'mongoose';
import user from './users';
import question from './question';

const schema = {
    user: user,
    question: question
}

export default schema;
