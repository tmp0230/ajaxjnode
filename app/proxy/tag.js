/**
 * Created by Administrator on 14-3-27.
 */
var models = require("../models");
var TagModel = models.Tag;


/**
 * 根据标签名字获取标签
 * Callback:
 * - err, 数据库异常
 * - tag, 标签
 * @param {String} name 标签名字
 * @param {Function} callback 回调函数
 */
exports.getTagByName = function(name,callback){
    TagModel.findOne({name:name},callback);
};

/**
 * 根据标签ID列表，获取一组标签
 * Callback:
 * - err, 数据库异常
 * - tags, 标签列表
 * @param {Array} ids 标签ID列表
 * @param {Function} callback 回调函数
 */
exports.getTagByIds = function(ids,callback){
    TagModel.find({_id:{'$in':ids}},callback);
};

/**
 * 获取所有标签
 * Callback:
 * - err, 数据库异常
 * - tags, 标签列表
 * @param {Function} callback 回调函数
 */
exports.getAllTags = function (callback) {
    var options = { sort: {create_at: -1}};
    TagModel.find({}, null,options, callback);
};
/**
 * 根据标签ID获取标签
 * Callback:
 * - err, 数据库异常
 * - tag, 标签
 * @param {String} id 标签ID
 * @param {Function} callback 回调函数
 */
exports.getTagById = function(id,callback){
    TagModel.findOne({_id:id},callback);
};


exports.update = function (tag, name, background, order, description, callback) {
    tag.name = name;
    tag.order = order;
    tag.background = background;
    tag.description = description;
    tag.save(callback);
};

exports.newAndSave = function (name, background, order, description, callback) {
    var tag = new TagModel();
    tag.name = name;
    tag.background = background;
    tag.order = order;
    tag.description = description;
    tag.save(callback);
};
