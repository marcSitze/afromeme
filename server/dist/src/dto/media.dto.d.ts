/// <reference types="node" />
export declare type CreateMediaDTO = {
    _id?: string;
    name: string;
    author: string;
    photo: {
        data: Buffer;
        contentType: string;
    };
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
};
