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
		type: Number
	}],
	podcastURL: {
		type: String
	}
});

var Pod = mongoose.model('Pod', PodSchema);
module.exports = Pod;