const Users = require('../models/users.model');

const watchUsers = async () => {
  try {
    const usersChangeStream = await Users.watch([
      // { $match: {
      //         $or: [{ operationType: 'insert' }, { operationType: 'update' }]
      //     }
      // },
  ]);

  usersChangeStream.on('change', (data) => {
    console.log(data);
  });

  } catch (error) {
    console.log("Error in watchUsers: ", error);
  }
}

module.exports = {
  watchUsers
}