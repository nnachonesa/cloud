"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validation = exports.UserAccount = void 0;
const constants_1 = require("../constants");
const UserModel_1 = __importDefault(require("../schema/UserModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserAccount {
    static async create(username, password) {
        Validation.validateUsername(username);
        Validation.validatePassword(password);
        const userExist = await UserModel_1.default.findOne({ Username: username });
        if (userExist)
            throw new Error('Username already exists');
        const hashedPassword = await bcrypt_1.default.hash(password, constants_1.SALT_ROUNDS);
        const nwu = new UserModel_1.default({ Username: username, Password: hashedPassword }).save();
        return (await nwu)._id;
    }
    static async login(username, password) {
        Validation.validateUsername(username);
        Validation.validatePassword(password);
        const userExist = await UserModel_1.default.findOne({ Username: username });
        if (!userExist)
            throw new Error('Username does not exist');
        const isntvalid = await Validation.isValid(password, String(userExist.Password));
        if (!isntvalid)
            throw new Error('Password is not valid');
        const userrwwerwr = userExist.toJSON();
        return {
            username: userrwwerwr.Username,
            _id: userrwwerwr._id
        };
    }
}
exports.UserAccount = UserAccount;
class Validation {
    static validateUsername(username) {
        if (typeof username !== 'string')
            throw new Error('Username must be string');
        if (username.length < 2)
            throw new Error('Username must be longer than 2 characters');
        if (username.length > 20)
            throw new Error('Username must be shorter than 20 characters');
    }
    static validatePassword(password) {
        if (typeof password !== 'string')
            throw new Error('Password must be string');
        if (password.length < 6)
            throw new Error('Password must be longer than 2 characters');
        if (password.length > 20)
            throw new Error('Password must be shorter than 20 characters');
    }
    static async isValid(password, passwordHash) {
        return bcrypt_1.default.compareSync(password, passwordHash);
    }
}
exports.Validation = Validation;
