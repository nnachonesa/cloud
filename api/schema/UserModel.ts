import { Schema, model } from "mongoose";

export const UserSchema = new Schema({
    Username: String,
    Password: String,
    DateCreated: { type: Date, default: Date.now() },
    Email: { type: String, default: "none" },
})

export default model('UserSchema', UserSchema)