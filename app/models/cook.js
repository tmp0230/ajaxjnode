/**
 * Created by Administrator on 14-3-26.
 * 菜谱model
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var CookSchema = new Schema({
    title:{type:String},
    content:{type:String},
    create_at:{type:Date,default:Date.now},
    update_at:{type:Date,default:Date.now}
});

mongoose.model("Cook",CookSchema,"t_cook");