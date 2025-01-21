"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeout_video = timeout_video;
const PostModel_1 = __importDefault(require("../schema/PostModel"));
async function timeout_video(key) {
    const post = await PostModel_1.default.findOne({ key: key });
    let fechaCreada = post === null || post === void 0 ? void 0 : post.DateCreated, fechaCPasada = new Date(Date.parse(String(fechaCreada))).getTime(), fechaHoy = new Date(Date.now()).getTime(), fechaDia = Number((fechaHoy - fechaCPasada) / (1000 * 60 * 60 * 24)).toFixed();
    console.log(`${fechaCreada}, ${fechaCPasada}, ${fechaHoy}, ${fechaDia}`);
    if (Number(fechaDia) > 3) {
        await PostModel_1.default.findOneAndDelete({ key: key });
        return true;
    }
    else
        return false;
}
