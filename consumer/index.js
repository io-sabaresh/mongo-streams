const express = require('express')
const app = express();
require('dotenv').config();

const PORT = process.env.CONSUMER_PORT || 3001;

app.get('/', function (req, res) {
  res.send('Hello World')
})

 
app.listen(PORT, async (error) => {
  if (error) return console.error(`Error while starting the CONSUMER on Port: ${PORT} `, error);
  console.log(`Project "CONSUMER" started successfully, listening on port ${PORT}`);
});