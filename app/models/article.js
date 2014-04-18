var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var ArticleSchema = new Schema({
	title:{type:String},
	url:{type:String},
	created:{type:String}
});
mongoose.model("Article",ArticleSchema,"t_article");