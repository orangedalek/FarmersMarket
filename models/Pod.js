var mongoose = require('mongoose'),
  , Schema = mongoose.Schema

var podSchema = Schema ({
	title: {
		type: String,
		null: false
	},
	icon: {
		type: String
	},
	description: {
		type: String
	},
	isAdmin: {
		type: Boolean,
		default: false
	}
	members: [{
		// This Number will be equal to the User _id
		type: Number,
		ref: User
	}]
});

var Pod = mongoose.model('Pod', podSchema);
module.exports = Pod;