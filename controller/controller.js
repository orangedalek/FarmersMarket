// Node Dependencies
const express = require('express');
const router = express.Router();


// Import the Article model
const User = require('../models/User.js');

// This will display the ReactJS application.
router.get('/', function(req, res) {
  res.render('index');
});


// Comment route
router.post("/articles/comment/:id", function(req, res) {
  var newComment = new Comment(req.body);
  newComment.save(function(err, doc) {
    if (err) console.log(err);
    else {
      Article.findOneAndUpdate({_id: req.params.id}, { $push: {comment: doc._id}}, {new: true}, function(error, newdoc) {
        if (error) console.log(error);
        else res.send(newdoc);
      });
    }
  });
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
	Pod.find({}, { 'members' : req.params.id })
    .exec(function(err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
});

//We will send the search parameters through the DOM(? - check documentation)
router.get('/pod/:keyword', function(req, res) {
  Pod.find({}, { 'keyword' : req.params.keyword })
  .exec(function(err, doc) {
    if(err){
      console.log(err);
    }
    else {
    }
  })
});

module.exports = router;