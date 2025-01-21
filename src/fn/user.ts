import { SALT_ROUNDS } from "../constants";
import UserModel from "../schema/UserModel";
import bcrypt from "bcrypt";
import { type PublicUser } from "../interfaces/publicUser";

export class UserAccount {
    static async create(username: string, password: string) {
        // validar
        Validation.validateUsername(username);
        Validation.validatePassword(password);

        // fijarse no exista el username en db
        const userExist = await UserModel.findOne({ Username: username });
        if (userExist) throw new Error('Username already exists');

        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
        const nwu = new UserModel({ Username: username, Password: hashedPassword }).save();
        return (await nwu)._id
    }
    static async login(username: string, password: string) {
        Validation.validateUsername(username);
        Validation.validatePassword(password);

        const userExist = await UserModel.findOne({ Username: username });
        if (!userExist) throw new Error('Username does not exist');

        const isntvalid = await Validation.isValid(password, String(userExist.Password));
        if (!isntvalid) throw new Error('Password is not valid');

        // const { Password: _, ...publicUser  } = userExist  forma moderna de sacarle props a los objetos
        // pero no funciona porque tiene un huevo y medio de propiedades 
        // @ts-ignore
        const userrwwerwr = userExist.toJSON()
        return {
            username: userrwwerwr.Username,
            _id: userrwwerwr._id
        }
    }
}

export class Validation {
    static validateUsername(username: string) {
        if (typeof username !== 'string') throw new Error('Username must be string');
        if (username.length < 2) throw new Error('Username must be longer than 2 characters');
        if (username.length > 20) throw new Error('Username must be shorter than 20 characters');
    }
    static validatePassword(password: string) {
        if (typeof password !== 'string') throw new Error('Password must be string');
        if (password.length < 6) throw new Error('Password must be longer than 2 characters');
        if (password.length > 20) throw new Error('Password must be shorter than 20 characters');
    }
    static async isValid(password: string, passwordHash: string) {
        return bcrypt.compareSync(password, passwordHash)
    }
}