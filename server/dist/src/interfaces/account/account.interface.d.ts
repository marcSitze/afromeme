import { IBio } from './bio.interface';
export interface IAccount {
    _id?: string;
    user: string;
    location: string;
    posts: string[];
    followers: string[];
    bio: IBio;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
