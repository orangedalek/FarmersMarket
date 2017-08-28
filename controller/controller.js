// Node Dependencies
const express = require('express');
const router = express.Router();


// Import the Article model
const User = require('../models/User.js');
const Pod = require('../models/Pod.js');
const Podcast = require("../models/Podcast.js");

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
        Comment.findOneAndUpdate({_id: req.params.id}, { $push: {comment: doc._id}}, {new: true}, function(error, newdoc) {
        if (error) console.log(error);
        else res.send(newdoc);
      });
    }
  });
});

//post a new user
router.post('/api/user', function(req,res) {
  var newUser = new User(req.body);
  newUser.save(function(err, doc) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      res.send(doc);
    }
  })
});

//post a new pod
router.post('/api/pods', function(req,res) {
  var newPod = new Pod(req.body);
  newPod.save(function(err, doc) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      res.send(doc);
    }
  })
});

//post a new podcast
router.post('/api/podcast', function(req,res) {
  var newPodcast = new Podcast(req.body);
  newPodcast.save(function(err, doc) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      res.send(doc);
    }
  })
});

router.get("/api/pods", function(req,res) {
  Pod.find({})
  .exec(function(err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
});

router.get("/api/user", function(req,res) {
  User.find({})
  .exec(function(err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
});

router.get("/api/podcast", function(req,res) {
  Podcast.find({})
  .exec(function(err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
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

// API DELETE - your components will use this to delete a saved pod in the database
router.delete("/api/pods/:id", function(req, res) {
  console.log(req.params.id);
  Pod.findByIdAndRemove(req.params.id, function (err, todo) {
    if (err) {
      console.log(err);      
      res.send(err);
    } 
    else {
      res.send(todo);
    }
  });

});

module.exports = router;