/**
 * Created by Administrator on 14-3-26.
 * 菜谱model
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var CookSchema = new Schema({
    title:{type:String},
	img:{type:String},
	url:{type:String},
    content:{type:String},
    category:{type:String},
    created:{type:String},
    updated:{type:String}
    // created:{type:Date,default:Date.now},
    // updated:{type:Date,default:Date.now}
});

mongoose.model("Cook",CookSchema,"t_cook");