import { Schema } from 'mongoose';

const question = new Schema({
    id: Number,
    title: String,
    answers: [
        {
            id: Number,
            title: String,
            ref: Number
        }
    ]
})

export default question;