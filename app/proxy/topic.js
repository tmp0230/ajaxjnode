/**
 * Created by Administrator on 14-3-26.
 */
var models = require("../models");
var TopicModel = models.Topic;

/**
 * 通过ID查找主题
 * Callback:
 * - err, 数据库异常
 * - topic, 主题
 * @param {String) id 分类ID
 * @param {Function} callback 回调 function(err,topic)
 */
exports.getTopicById = function(id,callback){
    TopicModel.findOne({_id:id},callback);
};

/**
 * 新建主题
 * Callback:
 * - err, 数据库异常
 * - topic, 新建的主题
 * @param {String} title 标题
 * @param {String} content 内容
 * @param {Function} callback 回调 function(err,topic)
 */
exports.newAndSave = function(title,content,callback){
    var topicEntity = new TopicModel();
    topicEntity.title = title;
    topicEntity.content = content;
    topicEntity.save(callback);
}