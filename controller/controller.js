// Node Dependencies
const express = require('express');
const router = express.Router();


// Import the Article model
const User = require('../models/User.js');

// This will display the ReactJS application.
router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;