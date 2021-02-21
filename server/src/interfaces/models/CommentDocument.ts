import { Document } from 'mongoose';

export interface CommentDocument extends Document {
    comment: string,
    publishAt: string,
    video: string,
    user: string
}
