"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const constants_1 = require("../constants");
const PostModel_1 = __importDefault(require("../schema/PostModel"));
const to_video_1 = require("../fn/to_video");
const router = (0, express_1.Router)();
router.get("/:key?", (req, res) => {
    if (!req.params.key) {
        res.sendFile(constants_1.HOME_PATH);
    }
    else {
        PostModel_1.default.findOne({ key: req.params['key'] }).then(async (post) => {
            var _a, _b;
            if (post && ((_a = post.Content) === null || _a === void 0 ? void 0 : _a.data) && ((_b = post.Content) === null || _b === void 0 ? void 0 : _b.contentType)) {
                if (await (0, to_video_1.timeout_video)(String(req.params['key'])))
                    return;
                const buf = Buffer.from(post.Content.data);
                res.setHeader('Content-Type', post.Content.contentType);
                res.send(buf);
            }
            else {
                res.status(404).send("Post not found");
            }
        }).catch((err) => {
            console.error(err);
            res.status(500).send("Error al buscar el post");
        });
    }
});
exports.default = router;
