// Node Dependencies
const express = require('express');
const router = express.Router();
const validator = require('validator');

// Import the Article model
const User = require('../models/User.js');
const Pod = require('../models/Pod.js');
const Podcast = require("../models/Podcast.js");


// This will display the ReactJS application.
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
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

//search for all pods
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

//search for a specific user
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

//We will send the search parameters through the DOM
router.get('/api/pods', function(req, res) {
  Pod.findOne({'keyword': podSearch})
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

// This redirect user to the "/" route for any unknown cases
router.get("*", function(req, res) {
  res.redirect("/");
});

function validateSignupForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
    isFormValid = false;
    errors.email = 'Please provide a correct email address.';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
    isFormValid = false;
    errors.password = 'Password must have at least 8 characters.';
  }

  if (!payload || typeof payload.username !== 'string' || payload.username.trim().length === 0) {
    isFormValid = false;
    errors.username = 'Please provide your name.';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

/**
 * Validate the login form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */
function validateLoginForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
    isFormValid = false;
    errors.email = 'Please provide your email address.';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
    isFormValid = false;
    errors.password = 'Please provide your password.';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

router.post('/signup', (req, res) => {
  const validationResult = validateSignupForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }

  return res.status(200).end();
});

router.post('/login', (req, res) => {
  const validationResult = validateLoginForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }

  return res.status(200).end();
});


module.exports = router;

module.exports = router;