/**
 * Created by Administrator on 14-3-26.
 */

var models = require("../models");
var CookModel = models.Cook;

exports.getCookById = function(id,callback){
    CookModel.findOne({_id:id},callback);
};


exports.newAndSave = function(title,content,callback){
   var cookEntity = new CookModel();
   cookEntity.title = title;
   cookEntity.content = content;
   cookEntity.save(callback);
};