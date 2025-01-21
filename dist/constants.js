"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SALT_ROUNDS = exports.HOME_PATH = exports.RESOURCE_PATH = exports.LOCAL_PATH = void 0;
const path_1 = require("path");
exports.LOCAL_PATH = (0, path_1.join)(process.cwd(), "local");
exports.RESOURCE_PATH = (0, path_1.join)(process.cwd(), 'client');
exports.HOME_PATH = (0, path_1.join)(process.cwd(), 'client', 'index.html');
exports.SALT_ROUNDS = 10;
