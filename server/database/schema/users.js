import { Schema } from 'mongoose';

const user = new Schema({
    name: String, 
    username: String,
    password: String, 
    role: Number
})

export default user;
