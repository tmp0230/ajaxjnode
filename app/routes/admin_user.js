// user admin 

var UserProxy = require("../proxy").User;

//用户列表
exports.userlist = function(req,res,next){
	UserProxy.getAllUsers(function(err,users){
		if(err){
			return next(err);
		}
		res.render("admin/userlist",{layout:"admin/layout",users:users});
	});
};