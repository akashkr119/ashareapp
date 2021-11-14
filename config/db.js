require('dotenv').config();
const mongoose = require ('mongoose');


const connectDB = async() => { 
    //Database Connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL);
    console.log('connected');
};

module.exports = connectDB;