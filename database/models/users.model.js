const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  fullName: String,
  userName: String,
  password: String,
  email: String,
  phone: String,
  address: String,
  profilePicture: String,
  gender: String,
  dob: String
}, { 
  timestamps: true 
});

module.exports = mongoose.model('users', UserSchema);
