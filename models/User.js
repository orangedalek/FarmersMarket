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
	isAdmin: {
		type: Boolean,
		default: false
	},
	pods: [{
		type: Schema.Types.ObjectId,
		ref: 'Pod'
	}]
});

var User = mongoose.model('User', userSchema);

module.exports = User;