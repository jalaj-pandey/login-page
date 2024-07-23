const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/userReg', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    });
    console.log('Connected to userReg database');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
