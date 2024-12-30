import { Schema, model } from "mongoose";

export const UserSchema = new Schema({
    Username: String,
    Password: String
})

export default model('UserSchema', UserSchema)