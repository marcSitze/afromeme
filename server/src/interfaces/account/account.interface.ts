import  { IBio } from './bio.interface';

export interface IAccount {
    _id?: string;
    user: string;
    location: string;
    followers: string[];
    bio: IBio;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}