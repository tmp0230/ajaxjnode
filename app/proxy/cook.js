/**
 * Created by Administrator on 14-3-26.
 */

var models = require("../models");
var CookModel = models.Cook;

exports.getCookById = function(id,callback){
    CookModel.findOne({_id:id},callback);
};


exports.getCookByTitle = function(title,callback){
	CookModel.findOne({title:title},callback);
};


exports.getAllCooks = function(callback){
	var options = {sort:{create_at:-1}};
	TagModel.find({},null,options,callback);
}


exports.newAndSave = function(title,content,callback){
   var cookEntity = new CookModel();
   cookEntity.title = title;
   cookEntity.content = content;
   cookEntity.save(callback);
};