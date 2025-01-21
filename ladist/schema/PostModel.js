"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSchema = void 0;
const mongoose_1 = require("mongoose");
exports.PostSchema = new mongoose_1.Schema({
    key: String,
    UserIP: String,
    DateCreated: { type: Date, default: Date.now() },
    Content: {
        data: Buffer,
        contentType: String
    },
});
exports.default = (0, mongoose_1.model)('PostSchema', exports.PostSchema);
