"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const constants_1 = require("../constants");
const key_1 = require("./key");
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, constants_1.LOCAL_PATH);
    },
    filename: (req, file, cb) => {
        var fileending, filename;
        fileending = String(file.originalname).split(".");
        fileending = String(fileending[fileending.length - 1]);
        filename = String((0, key_1.key)() + '.' + fileending);
        cb(null, String(filename));
    }
});
exports.upload = (0, multer_1.default)({ storage });
