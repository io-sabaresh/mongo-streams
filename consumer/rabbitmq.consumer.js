const AMQP = require('amqplib');
let AMQP_CHANNEL = null;

const createChannel = async () => {
  try {
    const connection = await AMQP.connect("amqp://localhost:5672");
    AMQP_CHANNEL = await connection.createChannel();
  } catch (error) {
    console.error(`Error while connecting to Channel: ${error}`);
    throw error;
  }
}

const consumeMessages = async() => {
  try {
    await AMQP_CHANNEL.assertQueue('users');
    AMQP_CHANNEL.consume('users', message => {
      console.log(`Message Received: `, JSON.parse(message.content.toString()).fullDocument.email);

      // Acknowledge Message, so that it will be dequeued
      AMQP_CHANNEL.ack(message);

    });
  } catch (error) {
    console.error(`Error while sending message: ${error}`)
  }
}


module.exports = {
  createChannel,
  consumeMessages
}