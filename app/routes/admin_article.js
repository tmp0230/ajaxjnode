var ArticleProxy = require("../proxy").Article;
var EventProxy = require('eventproxy');


exports.list = function(req,res,next){
	var _page = parseInt(req.query.page, 10) || 1;
	var _limit = 10
	
	// ArticleProxy.getAllArticles(function(err,articles){
	// 	if(err){
	// 		return next(err);
	// 	}
	// 	res.render("admin/articlelist",{layout:"admin/layout",articles:articles});
	// });
	
	var query = {};

	var render = function(articles,pages){
		res.render("admin/articlelist",{layout:"admin/layout",articles:articles,current_page:_page,pages:pages});
	}

	var proxy = EventProxy.create("articles","pages", render);		//建立两个名字对应 render函数的变量

	var options = {skip:(_page -1) * _limit,limit:_limit, sort: {created: 1}};

		ArticleProxy.getCountByQuery(query,function(err,article_count){
			if(err){
				return next(err);
			}
			var _pages = Math.ceil(article_count / _limit);
			
			proxy.emit("pages",_pages);			//这里把得到的总页数变量传给eventproxy

			// ArticleProxy.getArticlesByQuery(query,options,function(err,articles){
			// 	if(err){
			// 		return next(err);
			// 	}
			// 	proxy.emit("articles",articles);
			// 	res.render("admin/articlelist",{layout:"admin/layout",articles:articles,current_page:_page,pages:_pages});
			// });

		});


		ArticleProxy.getArticlesByQuery(query,options,function(err,articles){
				if(err){
					return next(err);
				}
				proxy.emit("articles",articles);	//这里把得到的分页的文章数变量传给eventproxy
				//res.render("admin/articlelist",{layout:"admin/layout",articles:articles,current_page:_page,pages:_pages});
		});

	
	

}