import * as mongoose from 'mongoose';
import { PostDocument } from '../interfaces/models/PostDocument';

const postSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    description: {
        type: String,
    },
    media: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Video'
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

export default mongoose.model<PostDocument>('Post', postSchema);