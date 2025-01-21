"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../fn/user");
const router = (0, express_1.Router)();
router.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        user_1.UserAccount.login(username, password).then((user) => {
            res.send(user);
        }).catch((err) => {
            res.status(401).send(err.message);
        });
    }
    else
        res.status(404);
});
exports.default = router;
