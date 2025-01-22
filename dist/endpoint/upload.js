"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uploader_1 = require("../fn/uploader");
const PostModel_1 = __importDefault(require("../schema/PostModel"));
const fs_1 = require("fs");
const router = (0, express_1.Router)();
router.post("/", uploader_1.upload.single('video'), async (req, res) => {
    if (req.file) {
        res.status(200).redirect(`/${req.file.filename.split('.')[0]}`);
        (await PostModel_1.default.create({
            key: req.file.filename.split(".")[0],
            Content: {
                data: await (0, fs_1.readFileSync)(req.file.path),
                contentType: req.file.mimetype
            },
            UserIP: req.ip
        })).save().then(async () => {
            var _a;
            await (0, fs_1.rmSync)(`${(_a = req.file) === null || _a === void 0 ? void 0 : _a.path}`);
        });
    }
    else
        res.status(404);
});
exports.default = router;
