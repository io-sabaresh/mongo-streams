const Axios = require('axios');

const getRandonUser = async () => {
  try {
    const { data: users } = await Axios({
      method: 'GET',
      url: "https://randomuser.me/api/",
      json: true
    });

    const user = users.results[0];

    return {
      fullName: `${user.name.title} ${user.name.first} ${user.name.last}`,
      userName: user.login.username,
      password: user.login.password,
      email: user.email,
      address: `${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`,
      gender: user.gender,
      dob: user.dob.date
    }
  } catch (error) {
    console.error(`Error in getRandonUser: ${error}`);
    throw error;
  }
}

const delay = (ms) => {
  return new Promise((resolve, reject) => {
    console.log('Delay Started!');
    setTimeout(() => {
      console.log('Delay Completed!');
      resolve();
    }, ms);
  })
};


module.exports = {
  getRandonUser,
  delay
}

