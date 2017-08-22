// Node Dependencies
const express = require('express');
const router = express.Router();


// Import the Article model
const User = require('../models/User.js');

// This will display the ReactJS application.
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/user/:id', function(req, res) {
	//finds user with matching id and sends the pods array
	User.findOne({ '_id' : req.params.id }, 'pods', function(err, pods) {
		if(err) return handleError(err);
		res.send(pods);
	})
});

router.get('/pod/:id', function(req, res) {
	//this will get all of the pods and put them on the podLanding page
	Pod.find({})
    .exec(function(err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
})

module.exports = router;