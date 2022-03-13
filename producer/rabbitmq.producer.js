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

const sendMessage = async(queueName, message) => {
  try {
    await AMQP_CHANNEL.assertQueue(queueName);
    AMQP_CHANNEL.sendToQueue(queueName, Buffer.from(JSON.stringify(message)));
    console.log(`Message Sent successfully: `, message.fullDocument.email);
  } catch (error) {
    console.error(`Error while sending message: ${error}`)
  }
}


module.exports = {
  createChannel,
  sendMessage
}