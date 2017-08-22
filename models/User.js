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
	pods: [{
		// pod id gets added to User & stored
		type: Schema.Types.ObjectId,
		ref: 'Pod'
	}]
});

var User = mongoose.model('User', userSchema);

module.exports = User;