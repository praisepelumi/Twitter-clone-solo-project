const User = require('../models/UserModel.js');
//const Tweet = require('../models/TweetModel.js')

const userController = {};

userController.createUser = (req, res, next) =>  {
  const { username, fullname, src } = req.body;

  User.create({
    username: username,
    fullname: fullname,
    src: src,

  })
    .then((newUser) => {
      res.locals.newUser = newUser;
      return next();
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: 'An error occurred while creating the user'
      });
      return next(err);
    });
}

userController.getUsers = (req, res, next) => {

  User.find({})
  .then(users => {
    res.locals.users = users;
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



module.exports = userController;