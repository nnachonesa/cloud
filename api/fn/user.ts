import UserModel from "../schema/UserModel";

export class UserAccount {
    static async create(username: string, password: string) {
        // validar
        if (typeof username !== 'string') throw new Error('Username must be string');
        if (username.length < 2) throw new Error('Username must be longer than 2 characters');
        if (typeof password !== 'string') throw new Error('Password must be string');
        if (password.length < 6) throw new Error('Password must be longer than 2 characters');

        // fijarse no exista el username en db
        const userExist = await UserModel.findOne({ Username: username });
        if (userExist) throw new Error('Username already exists');

        const nwu = new UserModel({ Username: username, Password: password }).save();
        return (await nwu)._id
    }
    static login(username: string, password: string) { }
}