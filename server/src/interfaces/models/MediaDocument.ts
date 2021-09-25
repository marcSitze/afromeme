import { Document } from 'mongoose';

export interface MediaDocument extends Document{
    _id: string;
    name: string,
    path: string,
    author: string,
    post: string,
    description: string,
    createdAt?: Date,
    updatedAt?: Date,
    deletedAt?: Date
}