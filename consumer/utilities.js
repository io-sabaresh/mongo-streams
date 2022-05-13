const delay = (ms) => {
  return new Promise((resolve, reject) => {
    console.log('Consumer Delay Started!');
    setTimeout(() => {
      console.log('Consumer Delay Completed!');
      resolve();
    }, ms);
  })
};


module.exports = {
  delay
}

