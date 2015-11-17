'use strict';

var express = require('express');
var router = express.Router();

var authMiddleware = require('../config/auth');

router.get('/', authMiddleware, function(req, res) {
  res.render('yourpage');
});

module.exports = router;
