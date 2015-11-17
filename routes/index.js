'use strict';

var express = require('express');
var router = express.Router();

var logMiddleware = require('../config/log');

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/register', logMiddleware, function(req, res) {
  res.render('register');
});

router.get('/login', logMiddleware, function(req, res) {
  res.render('login');
});

module.exports = router;
