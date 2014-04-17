/**
 * 后台处理系统配置
 */
var OptionProxy = require("../proxy").Option;


exports.list = function(req,res,next){
	OptionProxy.getAllOptions(function(err,options){
		if(err){
			return next(err);
		}
		res.render("admin/optionlist",{layout:"admin/layout",options:options});
	});

};	

/**
 * 新建系统配置
 */
exports.create = function(req,res,next){
	var name = req.body.name.trim();
	var cn = req.body.cn.trim();
	var value = req.body.value.trim();
	OptionProxy.newAndSave(name,cn,value,function(err){
		if(err){
			return next(err);
		}
		res.redirect("/admin/option/list");
	});
};

exports.delete = function(req,res,next){
	var id = req.params.id;
	OptionProxy.getOptionById(id,function(err,option){
		if(err){
			return next(err);
		}
		option.remove(function(err){
			if(err){
				return next(err);
			}
			res.redirect("/admin/option/list");
		});
	});
};

exports.edit = function(req,res,next){
	if(req.method == "GET"){
		var id = req.params.id;
		OptionProxy.getOptionById(id,function(err,option){
			if(err){
				return next(err);
			}
			res.render("admin/optionedit",{layout:"admin/layout",option:option});
		});

	}else if(req.method == "POST"){
		var id = req.body.id;
		var data = {
			name:req.body.name.trim(),
			cn:req.body.cn.trim(),
			value:req.body.value.trim()
		};
		var query = {_id:id};
		OptionProxy.update(query,data,function(err){
			if(err){
				return next(err);
			}
			res.redirect("/admin/option/list");
		});	
		
	}

};