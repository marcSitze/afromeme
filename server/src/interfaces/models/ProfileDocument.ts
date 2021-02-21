import { Document } from 'mongoose';

export interface profileDocument extends Document {
    user: string
     location: string
     bio: string,
     social: [
         youtube: string,
         twitter: string,
         facebook: string,
         instagram: string
     ],
     date: string
}