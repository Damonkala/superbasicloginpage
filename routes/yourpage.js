'use strict';

var express = require('express');
var router = express.Router();

var authMiddleware = require('../config/auth');
var User = require('../models/user');

router.get('/', authMiddleware, function(req, res) {

    res.render('yourpage', {name: req.cookies.username});


});

module.exports = router;
