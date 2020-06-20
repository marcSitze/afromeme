const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    publishDate: {
        type: String,
        required: true,
        default: Date.now
    },
    path: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Video', videoSchema);