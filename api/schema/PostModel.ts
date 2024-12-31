import { Schema, model } from "mongoose";

export const PostSchema = new Schema({
    key: String,
    UserIP: String,
    DateCreated: { type: Date, default: Date.now() },
    Content: {
        data: Buffer,
        contentType: String
    },
})

export default model('PostSchema', PostSchema)