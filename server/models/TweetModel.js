const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TweetSchema = new Schema({
    username: {type: String},
    text: {type: String},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
  
})


module.exports = mongoose.model('Tweet', TweetSchema);