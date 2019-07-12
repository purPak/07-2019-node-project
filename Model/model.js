const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let blockSchema = new Schema({
	nom: {
		type: String,
		default: "nul"
	},
	prenom: {
		type: String,
		default: "nul"
	},
	mail: {
		type: String,
		default: "nul"
	},
	projet: {
		type: String,
		default: "nul"
	},
	description: {
		type: String,
		default: "nul"
	},
	nom0: {
		type: String,
		default: "nul"
	},
	prenom0: {
		type: String
	}
});

module.exports = mongoose.model('Hackhatons', blockSchema);