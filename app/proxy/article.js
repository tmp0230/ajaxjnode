var models = require("../models");
var ArticleModel = models.Article;

exports.getAllArticles = function(callback){
	ArticleModel.find({},null,null,callback);
};

/**
 * 获取关键词能搜索到的主题数量
 * Callback:
 * - err, 数据库错误
 * - count, 主题数量
 * @param {String} query 搜索关键词
 * @param {Function} callback 回调函数
 */
exports.getCountByQuery= function (query, callback) {
  ArticleModel.count(query, callback);
};


exports.getArticlesByQuery = function(query,opt,callback){
	ArticleModel.find(query,null,opt,callback);
};