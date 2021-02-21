import { Document } from 'mongoose';

export interface VideoDocument extends Document{
    name: string,
    publishDate: string,
    path: string,
    author: string,
    description: string
}