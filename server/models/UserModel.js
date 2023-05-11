const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {type: String},
  fullname: {type: String},
  src: {type: String},
  
});

module.exports = mongoose.model('User', UserSchema);