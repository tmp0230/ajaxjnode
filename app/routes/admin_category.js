//分类后台控制

var CategoryProxy = require("../proxy").Category;

//分类列表
exports.list = function(req,res,next){
	CategoryProxy.getAllCategories(function(err,categories){
		if(err){
			return next(err);
		}
		res.render("admin/categorylist",{layout:"admin/layout",categories:categories});
	});
};


exports.delete = function(req,res,next){
	var category_id = req.params.cid;
	CategoryProxy.getCategoryById(category_id,function(err,category){
		if(err){
			return next(err);		//TODO 可以使用ajaxj return res.send({success:false,message:err.message});
		}
		category.remove(function(err){
			if(err){
				return next(err);
			}
			res.redirect("/admin/category/list");
		});
	});
};


exports.create = function(req,res,next){
	var _name = req.body.name;
	var _cn = req.body.cn;
	CategoryProxy.newAndSave(_name,_cn,function(err){
		if(err){
			return next(err);
		}
		res.redirect("/admin/category/list");
	});
};