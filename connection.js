const mongoose = require('mongoose');

async function connectMongoDb(url) {
        await mongoose.connect(url);
    }
module.exports = connectMongoDb;