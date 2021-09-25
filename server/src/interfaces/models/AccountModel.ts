import { Document } from 'mongoose';
import { IBio } from '../account/bio.interface';

export interface AccountDocument extends Document{
    _id: string;
    user: string;
    location: string;
    followers: string[];
    bio: IBio;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}