/**
 * Created by Administrator on 14-3-26.
 */

var models = require("../models");
var CategoryModel = models.Category;



exports.getAllCategories = function(callback){
	var options = null;
	CategoryModel.find({},null,null,callback);
};


/**
 * 通过ID查找分类
 * Callback:
 * - err, 数据库异常
 * - category, 分类
 * @param {String) id 分类ID
 * @param {Function} callback 回调 function(err,category)
 */
exports.getCategoryById = function(id,callback){
    CategoryModel.findOne({_id:id},callback);
};

/**
 * 新建分类
 * Callback:
 * - err, 数据库异常
 * - category, 新建的分类
 * @param {String} name 分类英文
 * @param {String} cn 分类中文
 * @param {Function} callback 回调 function(err,category)
 */
exports.newAndSave = function(name,cn,callback){
    var categoryEntity = new CategoryModel();
    categoryEntity.name = name;
    categoryEntity.cn = cn;
    categoryEntity.save(callback);
}