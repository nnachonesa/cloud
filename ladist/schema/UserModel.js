"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    Username: String,
    Password: String,
    DateCreated: { type: Date, default: Date.now() },
    Email: { type: String, default: "none" },
});
exports.default = (0, mongoose_1.model)('UserSchema', exports.UserSchema);
