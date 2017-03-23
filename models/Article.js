// Require mongoose
var mongoose = require("mongoose");

// Create Schema Class
var Schema = mongoose.Schema 

var ArticleSchema = new Schema ({
	title:{
		type:String,
		required: true
	},
	date:{
		type:Date,
		default:Date.now
	},
	url: {
		type:String,
		required:true
	}
});

module.exports = mongoose model("Article", ArticleSchema);