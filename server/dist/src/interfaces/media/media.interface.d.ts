/// <reference types="node" />
export default interface IMedia {
    _id?: string;
    name: string;
    author: string;
    photo: {
        data: Buffer;
        contentType: String;
    };
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
