//cook admin

var CookProxy = require("../proxy").Cook;

exports.cooklist = function(req,res,next){
	CookProxy.getAllCooks(function(err,cooks){
		if(err){
			return next(err);
		}
		res.render("admin/cooklist",{layout:"admin/cooklist",cooks:cooks});
	});
};