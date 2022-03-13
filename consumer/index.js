const express = require('express')
const app = express();
require('dotenv').config();

const PORT = process.env.CONSUMER_PORT || 3001;

app.get('/', function (req, res) {
  res.send('Hello World')
})

const { createChannel, consumeMessages } = require('./rabbitmq.consumer');

app.listen(PORT, async (error) => {
  if (error) return console.error(`Error while starting the CONSUMER on Port: ${PORT} `, error);
  console.log(`Project "CONSUMER" started successfully, listening on port ${PORT}`);

  // Create RabbitMQ Producer Channels
  await createChannel();

  consumeMessages()
});