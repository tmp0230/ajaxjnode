//cook admin

var CookProxy = require("../proxy").Cook;
var EventProxy = require("eventproxy");

exports.list = function(req,res,next){
	var _page = parseInt(req.query.page,10) || 1;
	var _limit = 10;
	var query = {};
	var options = {skip:(_page -1) * _limit,limit:_limit, sort: {created: 1}};

	var render = function(cooks,pages){
		res.render("admin/cooklist",{layout:"admin/layout",cooks:cooks,current_page:_page,pages:pages});
	}

	var proxy = EventProxy.create("cooks","pages",render);


	CookProxy.getCountByQuery(query,function(err,cook_count){
		if(err){
			return next(err);
		}
		var _pages = Math.ceil(cook_count / _limit);
		proxy.emit("pages",_pages);
		
	});
	CookProxy.getCooksByQuery(query,options,function(err,cooks){
		if(err){
			return next(err);
		}
		proxy.emit("cooks",cooks);
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