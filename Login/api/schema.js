const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// collection and schema for Registration
let Registration = new Schema({
	firstName: {
		type: String
	},
	lastName: {
		type: String
	},
	email: {
		type: String
	},
	jobTitle: {
		type: String
	},
	user_name: {
		type: String,
		unique: true,
		required: true,
		trim: true
	},
	password: {
		type: String,
		required: true,
		trim: true
	}
},{
		collection: 'Registration'
});

module.exports = mongoose.model('Registration', Registration);
