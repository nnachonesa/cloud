import { Schema } from "mongoose";
export declare const UserSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    DateCreated: NativeDate;
    Email: string;
    Username?: string | null | undefined;
    Password?: string | null | undefined;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    DateCreated: NativeDate;
    Email: string;
    Username?: string | null | undefined;
    Password?: string | null | undefined;
}>> & import("mongoose").FlatRecord<{
    DateCreated: NativeDate;
    Email: string;
    Username?: string | null | undefined;
    Password?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
declare const _default: import("mongoose").Model<{
    DateCreated: NativeDate;
    Email: string;
    Username?: string | null | undefined;
    Password?: string | null | undefined;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    DateCreated: NativeDate;
    Email: string;
    Username?: string | null | undefined;
    Password?: string | null | undefined;
}> & {
    DateCreated: NativeDate;
    Email: string;
    Username?: string | null | undefined;
    Password?: string | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    DateCreated: NativeDate;
    Email: string;
    Username?: string | null | undefined;
    Password?: string | null | undefined;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    DateCreated: NativeDate;
    Email: string;
    Username?: string | null | undefined;
    Password?: string | null | undefined;
}>> & import("mongoose").FlatRecord<{
    DateCreated: NativeDate;
    Email: string;
    Username?: string | null | undefined;
    Password?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
