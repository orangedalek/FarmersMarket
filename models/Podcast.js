var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PodcastSchema = new Schema({

	title: {
		type: String,
		required: true
	},
	date: {
		type: Date
	},
	description: {
		type: String
	},
	image: {
		type: String,
		required: true
	},
	url: {
		type: String
	}
});

var Podcast = mongoose.model('Podcast', PodcastSchema);
module.exports = Podcast;