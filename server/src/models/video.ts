import * as mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    publishDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    path: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('Video', videoSchema);