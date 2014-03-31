//cook admin

var CookProxy = require("../proxy").Cook;

exports.list = function(req,res,next){
	CookProxy.getAllCooks(function(err,cooks){
		if(err){
			return next(err);
		}
		res.render("admin/cooklist",{layout:"admin/layout",cooks:cooks});
	});
};

exports.delete = function(req,res,next){
	var cook_id = req.params.cid;
	CookProxy.getCookById(cook_id,function(err,cook){
		if(err){
			return next(err);
		}
		cook.remove(function(err){
			if(err){
				return next(err);
			}
			res.redirect("/admin/cook/list");
		});
	});
};	


exports.create = function(req,res,next){
	var _title = req.body.title.trim();
	var _content = req.body.content.trim();
	CookProxy.newAndSave(_title,_content,function(err){
		if(err){
			return next(err);
		}
		res.redirect("/admin/cook/list");
	});
};