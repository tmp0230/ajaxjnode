// user admin 

var UserProxy = require("../proxy").User;

//用户列表
exports.list = function(req,res,next){
	UserProxy.getAllUsers(function(err,users){
		if(err){
			return next(err);
		}
		res.render("admin/userlist",{layout:"admin/layout",users:users});
	});
};


exports.delete = function(req,res,next){
	var user_id = req.params.uid;
	UserProxy.getUserById(user_id,function(err,user){
		if(err){
			return next(err);
		}
		user.remove(function(err){
			if(err){
				next(err);
			}
			res.redirect("/admin/user/list");
		});
	});
};

//新建
exports.create = function(req,res,next){
	var _name = req.body.name.trim();
	var _loginname = req.body.loginname.trim();
	var _pass = req.body.pass.trim();
	var _email = req.body.email.trim();

	UserProxy.newAndSave(_name,_loginname,_pass,_email,function(err){
		if(err){
			return next(err);
		}
		res.redirect("/admin/user/list");
	});
};