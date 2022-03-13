const { QUEUES } = require('../../constants');
const Users = require('../models/users.model');
const { sendMessage } = require('../../rabbitmq.producer');

const watchUsers = async () => {
  try {
    const usersChangeStream = await Users.watch([
      // { $match: { $or: [{ operationType: 'insert' }, { operationType: 'update' }] } },
    ]);

    usersChangeStream.on('change', (data) => {
      sendMessage(QUEUES['USERS'], data);
    });

  } catch (error) {
    console.log("Error in watchUsers: ", error);
  }
}

module.exports = {
  watchUsers
}