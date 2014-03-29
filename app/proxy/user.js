//代理类 封装了 model 
var models = require("../models");
var UserModel = models.User;


exports.getAllUsers = function(callback){
	var options = null;
	UserModel.find({},null,options,callback);
};


/**
 * 通过ID查找用户
 * Callback:
 * - err, 数据库异常
 * - user, 用户
 * @param {String} id 用户ID
 * @param {Function} callback 回调 function (err, user) 
 */
exports.getUserById = function(id,callback){
	UserModel.findOne({_id:id},callback);
};


/**
 * 通过用户名，查找用户
 * Callback:
 * - err,　数据库异常
 * - user,　用户对象
 * @param {String} name 用户名
 * @param {Function} callback 回调 function (err, user) 
 */
exports.getUserByName = function(name,callback){
	UserModel.findOne({name:name},callback);
};

/**
 * 通过邮箱查找用户
 * Callback:
 * - err,　数据库异常
 * - user, 用户
 * @param {String} email 邮箱
 * @param {Function} callback 回调 function (err, user) 
 */
exports.getUserByMail = function(email,callback){
	UserModel.findOne({email:email},callback);
};


/**
 *建立实体新建保存新用户
 * Callback:
 * - err, 数据库异常
 * - user, 新建的用户
 * @param {String} name 用户名
 * @param {String} loginname 登录名
 * @param {String} pass 　密码
 * @param {String} email 　邮件
 * @param {Function} callback 回调　function (err, topic)
*/
exports.newAndSave = function(name,loginname,pass,email,callback){
	var userEntity = new UserModel();
	userEntity.name = name;
	userEntity.loginname = loginname;
	userEntity.pass = pass;
	userEntity.email = email;
	userEntity.save(callback);
}