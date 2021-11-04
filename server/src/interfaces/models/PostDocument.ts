import { Document } from 'mongoose';

export interface PostDocument extends Document {
    _id: string;
    author: string;
    description: string;
    media: string;
    comments: string[];
    likes?: string[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}