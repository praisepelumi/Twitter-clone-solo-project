const Tweet = require('../models/TweetModel.js');
const User = require('../models/UserModel.js');

const tweetController = {};

tweetController.getTweets = (req, res, next) => {
  // this method should generate all tweets in our current database
  Tweet.find({})
  .then((data) => {
    res.locals.tweet = data
    return next()
  })
  .catch(err => {
    console.error(err);
      res.status(500).json({
        message: 'An error occurred while getting tweets'
      });
      return next(err);
  })
}


tweetController.createTweet = (req, res, next) => {
  const { username } = req.params;
  const { newTweet } = req.body;
  User.findOne({username})
    .then(user => {
      if(!user) {
        return next({
          log: 'user not found',
          status: 404,
        })
      }
      Tweet.create({
        username: user.username,
        text: newTweet  
      })
      .then(document => {
        res.locals.newTweet = document;
        return next();
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: 'An error occurred while creating the tweets'
        });
        return next(err);
      })
    })
}

tweetController.updateTweet = (req, res, next) => {
  const { tweetId } = req.params;
  const { newTweet } = req.body;

  Tweet.findOneAndUpdate({_id: tweetId}, {text: newTweet},// find user and tweet to update
  // {$set: {'tweets.$.text': newTweet}}, //update the text of the tweet
  {new: true} // return the updated document
  )
  .then((updatedTweet) => {
    res.locals.updatedTweet = updatedTweet;
    return next();
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      message: 'An error occurred while updating the tweet'
    });
    return next(err);
  });
};

tweetController.deleteTweet = (req, res, next) => {
  const {tweetId} = req.params;
  Tweet.findOneAndDelete(
    {_id: tweetId},
    {new: true}
  )
  .then((deletedTweet) => {
    if(!deletedTweet) {
      return next({
        log: "Tweet not found"
      })
    }

    return next();
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({message: 'An error eccured while deleting tweet'});
    return next(err);
  });
  
};

module.exports = tweetController;
