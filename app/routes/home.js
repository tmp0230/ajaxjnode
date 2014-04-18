var UserProxy = require("../proxy").User;
var CookProxy = require("../proxy").Cook;
var ArticleProxy = require("../proxy").Article;

exports.index = function(req,res,next){
	res.render("index",{layout:'layout'});

};


exports.cooks = function(req,res,next){
	var query = {}
	var options = {limit:12}

	CookProxy.getCooksByQuery(query,options,function(err,cooks){
		if(err){
			return next(err);
		}

		res.render("cooks",{layout:'contentlayout',cooks:cooks});
	});
	
};


exports.articles = function(req,res,next){

	var query = {}
	var options = {limit:30}

	ArticleProxy.getArticlesByQuery(query,options,function(err,articles){
		if(err){
			return next(err);
		}

		res.render("articles",{layout:'contentlayout',articles:articles});
	});
}