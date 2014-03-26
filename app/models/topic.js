//主题的模型
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var TopicSchema = new Schema({
	title:{type:String},
	content:{type:String},
	create_at:{type:Date,default:Date.now},
	update_at:{type:Date,default:Date.now}
});

mongoose.model("Topic",TopicSchema,"t_topic");