const Users = require('./database/models/users.model');
const { getRandonUser, delay } = require('./utilities');

const generateRandonUsers = async (count = 100, ms = 1000) => {
  try {
    for (let i = 0; i < count; i++) {
      // await delay(ms);
      const userDetails = await getRandonUser();
      await new Users(userDetails).save();
    }
  } catch (error) {
    console.log("Error in generateRandonUsers: ", error);
  }
}

module.exports = {
  generateRandonUsers
}