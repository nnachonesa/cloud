export declare class UserAccount {
    static create(username: string, password: string): Promise<import("mongoose").Types.ObjectId>;
    static login(username: string, password: string): Promise<{
        username: string | null | undefined;
        _id: import("mongoose").Types.ObjectId;
    }>;
}
export declare class Validation {
    static validateUsername(username: string): void;
    static validatePassword(password: string): void;
    static isValid(password: string, passwordHash: string): Promise<boolean>;
}
