const mongoose = require('mongoose');

const Schema = mongoose.Schema;
let eleve = new Schema({
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
	}
});

let projet = new Schema({
	nom: {
		type: String,
		default: "nul"
	},
	prenom: {
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
	eleves: [eleve]
	
});


module.exports = mongoose.model('Hackhatons', projet);