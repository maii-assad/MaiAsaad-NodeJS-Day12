const mongoose = require('mongoose');
const env = require('dotenv');
const path = require('path');
env.config({ path: path.join(__dirname, '../.env') });



const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};


module.exports = {connectDB};










