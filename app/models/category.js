/**
 * Created by Administrator on 14-3-26.
 */

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var CategorySchema = new Schema({
    name:{type:String},
    cn:{type:String}
});

mongoose.model("Category",CategorySchema,"t_category");