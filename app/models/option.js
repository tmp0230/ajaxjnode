/**
 *配置model
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var OptionSchema = new Schema({
	name:{type:String},	//配置名称
	value:{type:String}	//配置内容
});

mongoose.model("Option",OptionSchema,"t_option");