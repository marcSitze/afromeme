/// <reference types="node" />
import { Document } from 'mongoose';
export interface MediaDocument extends Document {
    _id: string;
    name: string;
    photo: {
        data: Buffer;
        contentType: string;
    };
    author: string;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
