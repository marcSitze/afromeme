import { Document } from 'mongoose';
import { IBio } from '../account/bio.interface';
export interface AccountDocument extends Document {
    _id: string;
    user: string;
    location: string;
    posts: string[];
    followers: string[];
    bio: IBio;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
