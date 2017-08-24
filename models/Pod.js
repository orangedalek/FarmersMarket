var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PodSchema = new Schema({

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
	keyword: {
		type: String
	},
	members: [{
		// This Number will be equal to the User _id
		type: Number
	}],
	admin: {
		type: Number
	}
});

var Pod = mongoose.model('Pod', PodSchema);
module.exports = Pod;