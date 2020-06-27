const mongoose = require('mongoose');
const config = require('config');
const db = config.get('dataBASE_URL');

const ConnectDB = async () => {
    try {
    
    mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('MongoDB Connected...');
    } catch(err) {
        console.error(err);
    }
};

module.exports = ConnectDB; 