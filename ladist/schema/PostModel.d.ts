import { Schema } from "mongoose";
export declare const PostSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    DateCreated: NativeDate;
    key?: string | null | undefined;
    UserIP?: string | null | undefined;
    Content?: {
        data?: Buffer | null | undefined;
        contentType?: string | null | undefined;
    } | null | undefined;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    DateCreated: NativeDate;
    key?: string | null | undefined;
    UserIP?: string | null | undefined;
    Content?: {
        data?: Buffer | null | undefined;
        contentType?: string | null | undefined;
    } | null | undefined;
}>> & import("mongoose").FlatRecord<{
    DateCreated: NativeDate;
    key?: string | null | undefined;
    UserIP?: string | null | undefined;
    Content?: {
        data?: Buffer | null | undefined;
        contentType?: string | null | undefined;
    } | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
declare const _default: import("mongoose").Model<{
    DateCreated: NativeDate;
    key?: string | null | undefined;
    UserIP?: string | null | undefined;
    Content?: {
        data?: Buffer | null | undefined;
        contentType?: string | null | undefined;
    } | null | undefined;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    DateCreated: NativeDate;
    key?: string | null | undefined;
    UserIP?: string | null | undefined;
    Content?: {
        data?: Buffer | null | undefined;
        contentType?: string | null | undefined;
    } | null | undefined;
}> & {
    DateCreated: NativeDate;
    key?: string | null | undefined;
    UserIP?: string | null | undefined;
    Content?: {
        data?: Buffer | null | undefined;
        contentType?: string | null | undefined;
    } | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    DateCreated: NativeDate;
    key?: string | null | undefined;
    UserIP?: string | null | undefined;
    Content?: {
        data?: Buffer | null | undefined;
        contentType?: string | null | undefined;
    } | null | undefined;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    DateCreated: NativeDate;
    key?: string | null | undefined;
    UserIP?: string | null | undefined;
    Content?: {
        data?: Buffer | null | undefined;
        contentType?: string | null | undefined;
    } | null | undefined;
}>> & import("mongoose").FlatRecord<{
    DateCreated: NativeDate;
    key?: string | null | undefined;
    UserIP?: string | null | undefined;
    Content?: {
        data?: Buffer | null | undefined;
        contentType?: string | null | undefined;
    } | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
