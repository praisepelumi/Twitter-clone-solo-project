const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
var cors = require('cors')
require('dotenv').config();
const userController = require('./controllers/userController.js');
const tweetController = require('./controllers/tweetController.js')

const PORT = 3000;

const app = express();


const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors())
app.use(express.json());
app.use(express.urlencoded());

app.use('/twitterclone', express.static(path.resolve(__dirname, '../public')));

app.get('/tweets', tweetController.getTweets, (req, res) => {
  res.status(200).json(res.locals.tweet)

});

app.get('/loadusers', userController.getUsers, (req, res) => {
  res.status(200).json(res.locals.users);
})

app.post('/createuser', userController.createUser, (req, res) => {
  res.status(201).json(res.locals.newUser);
})


// route for creating new tweet
app.post('/newtweet/:username/', tweetController.createTweet, (req, res) => {
  res.status(201).json(res.locals.newTweet)
})

//route for updating tweet
app.patch('/update/:tweetId', tweetController.updateTweet, (req, res) => {
  res.status(200).json(res.locals.updatedTweet);
})

//route for deleting tweet
app.delete('/delete/:tweetId', tweetController.deleteTweet, (req, res) => {
  res.status(200).json({message: 'Tweet deleted successfully'});
})


//404 error handler 
app.use('*', (req, res) => {
  res.status(400).send('Not Found');
})

//Global error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({error: err})
});

app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...`); });

module.exports = app;







