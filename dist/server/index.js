"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const home_1 = __importDefault(require("../endpoint/home"));
const upload_1 = __importDefault(require("../endpoint/upload"));
const register_1 = __importDefault(require("../endpoint/register"));
const login_1 = __importDefault(require("../endpoint/login"));
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = require("../fn/logger");
const connect_1 = require("../void/connect");
const constants_1 = require("../constants");
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(constants_1.RESOURCE_PATH));
app.use('/', home_1.default);
app.post('/', upload_1.default);
app.post('/login', login_1.default);
app.post('/register', register_1.default);
app.post('/logout', () => { });
app.listen(3001, () => {
    logger_1.logger.debug("✔  La pagina ya cargo");
    (0, connect_1.connectdb)(String(process.env.tok));
});
