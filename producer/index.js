const express = require('express')
const app = express();
require('dotenv').config();

const { connectMongoDB } = require('./database/mongoose.connections');

const PORT = process.env.PRODUCER_PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World')
})

const { generateRandonUsers } = require('./randonUserGenerator');
const { watchUsers } = require('./database/streams/mongoWatchStreams');
const { createChannel } = require('./rabbitmq.producer');
 
app.listen(PORT, async (error) => {
  if (error) return console.error(`Error while starting the PRODUCER on Port: ${PORT} `, error);
  console.log(`Project "PRODUCER" started successfully, listening on port ${PORT}`);
  
  // Connect to MongoDB 
  await connectMongoDB();

  // Create RabbitMQ Producer Channels
  await createChannel();

  // Start Mongo Watch Streams
  watchUsers();

  // Script to generate random users
  generateRandonUsers(10, 0);
});