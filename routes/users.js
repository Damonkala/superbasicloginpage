'use strict';

var express = require('express');
var router = express.Router();

var User = require('../models/user');

// USERS

// register a new user
router.post('/register', function(req, res) {
  User.register(req.body, function(err, savedUser){
    res.status(err ? 400 : 200).send(err || savedUser);
  });
});



router.post('/login', function(req, res) {
  User.authenticate(req.body, function(err, user){
    res.cookie('username', user.username);
    res.cookie('userId', user._id);
    res.cookie('userEmail', user.email);
    res.cookie('bio', user.bio);
    res.status(err ? 400 : 200).send(err || user);
  });
});

router.put('/update', function(req, res){
  res.cookie('bio', req.body.bio);
  User.update({username: req.body.name}, {$set: {bio: req.body.bio}},
  function(err, post){
    res.send(post);
  })
})

// router.get('/bio', function(req, res){
//   User.findOne({username: req.body.name}, {bio: req.body.bio}},
//   function(err, post){
//     res.send(post);
//   })
// })

router.post('/logout', function(req, res) {
  res.clearCookie('username');
  res.clearCookie('userId');
  res.clearCookie('bio');
  res.clearCookie('userEmail');
  res.send();
})



module.exports = router;
