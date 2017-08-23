var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var adminSchema = Schema({
	user: {
		type: Number,
		ref: User
	},
	isAdmin: {
		type: Boolean,
		default: true
	},
	pods: [{
		type: Schema.Types.ObjectId,
		ref: 'Pod'
	}]
});

var Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;