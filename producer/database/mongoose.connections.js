const mongoose = require('mongoose');
const mongoConnectionString = process.env.mongoURL || "mongodb+srv://sabaresh_user:P8KhpxLftfxgqj5J@taskscheduler.l866f.mongodb.net/mongo-streams?retryWrites=true&w=majority";

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