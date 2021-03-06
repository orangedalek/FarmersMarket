var mongoose = require('mongoose');

var Schema = mongoose.Schema

var UserSchema = Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required:true
	},
	image: {
		type: String,
		required: true
	}
	
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
