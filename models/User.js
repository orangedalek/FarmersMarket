var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var userSchema = Schema({
	username: {
		type: String
	},
	password: {
		type: String
	},
	image: {
		type: String
	},
	// This won't work because it'll say that this user is admin in every pod. We need to make
	// a separate admin model or something...
	isAdmin: {
		type: Schema.Types.ObjectId,
		ref: 'Pod'
	},
	pods: [{
		type: Schema.Types.ObjectId,
		ref: 'Pod'
	}]
});

var User = mongoose.model('User', userSchema);

module.exports = User;
