"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectdb = connectdb;
const mongoose_1 = require("mongoose");
const logger_1 = require("../fn/logger");
function connectdb(tok) {
    (0, mongoose_1.connect)(tok, {}).catch((err) => { logger_1.logger.fatal(err); }).then(() => { logger_1.logger.debug('✔  Se conecto a mongo.'); });
}
