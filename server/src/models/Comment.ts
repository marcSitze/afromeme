import * as mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    comment: {
        type: String
    },
    publishAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    video: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Video'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});

module.exports = mongoose.model('Comment', commentSchema);