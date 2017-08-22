// Node Dependencies
const express = require('express');
const router = express.Router();


// Import the Article model
const User = require('../models/User.js');

// This will display the ReactJS application.
router.get('/', function(req, res) {
  res.render('index');
});

// this will post specific id to page
router.post('/user/:id', function(req, res) {
  var newPod = new User(req.body);
  newPod.save(function(err, doc) {
    if (err) {
      console.log(err);
    } else {
      res.send(doc);
    }
  })
})

module.exports = router;
