'use strict';

var express = require('express');
var router = express.Router();

var logMiddleware = require('../config/log');

router.get('/', logMiddleware, function(req, res) {
  res.render('login');
});

module.exports = router;
