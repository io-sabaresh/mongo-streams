const mongoose = require('mongoose');
const mongoConnectionString = process.env.mongoURL;

const connectMongoDB = async () => {
  try {
    mongoose.connect(
      mongoConnectionString,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (error) => { 
        if (error) throw error;
        console.log(`MongoDB Connected!`)
      }
    );
  } catch (error) {
    console.error(`Error while connecting to MongoDB: ${error}`);
  }
}

module.exports = {
  connectMongoDB
}