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
	CookModel.find({},null,options,callback);
}

exports.getCountByQuery = function(query,callback){
	CookModel.count(query,callback);
}

exports.getCooksByQuery = function(query,opt,callback){
	CookModel.find(query,null,opt,callback);
};


exports.newAndSave = function(title,content,callback){
   var cookEntity = new CookModel();
   cookEntity.title = title;
   cookEntity.content = content;
   cookEntity.save(callback);
};