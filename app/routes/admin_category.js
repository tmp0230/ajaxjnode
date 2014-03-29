//分类后台控制

var CategoryProxy = require("../proxy").Category;

//分类列表
exports.categorylist = function(req,res,next){
	CategoryProxy.getAllCategories(function(err,categories){
		if(err){
			return next(err);
		}
		res.render("admin/categorylist",{layout:"admin/layout",categories:categories});
	});
};