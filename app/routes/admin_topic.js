//Topic admin
var TopicProxy = require("../proxy").Topic;


//主题列表
exports.topiclist = function(req,res,next){
	TopicProxy.getAllTopics(function(err,topics){
		if(err){
			return next(err);
		}

		res.render("admin/topiclist",{layout:"admin/layout",topics:topics});
	});
};


