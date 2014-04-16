var models = require("../models");
var OptionModel = models.Option;

 
/**
 * 查找所有option
 * Callback:
 * - err,数据库异常
 * - options, 系统配置静表
 * @param {Function} callback 回调函数
 */
exports.getAllOptions = function(callback){
	OptionModel.find({},null,null,callback);
};

/**
 * 通过ID获取Option
 * Callback:
 * - err, 数据库异常
 * - option, 系统配置
 * @param {String} id
 * @param {Function} callback 回调函数 
 */
exports.getOptionById = function(id,callback){
	OptionModel.findOne({_id:id},callback);
};


/**
 * 通过名字获取Option
 * Callback:
 * - err, 数据库异常
 * - option, 系统配置
 * @param {String} name 配置名字
 * @param {Function} callback 回调函数
 */
exports.getOptionByName = function(name,callback){
	OptionModel.findOne({name:name},callback);
};


/**
 * 新建option
 * Callback:
 * - err,数据库异常
 * - option,新建的option
 * @param {String} name 配置名字
 * @param {String}  cn  配置中文名字
 * @param {String} value 配置内容
 * @param {Function} callback 回调 function(err,option)
 */
exports.newAndSave = function(name,cn,value,callback){
	var optionEntity = new OptionModel();
	optionEntity.name = name;
	optionEntity.cn = cn;
	optionEntity.value = value;
	optionEntity.save(callback);
};


