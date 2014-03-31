//Topic admin
var TopicProxy = require("../proxy").Topic;


//主题列表
exports.list = function(req,res,next){
	TopicProxy.getAllTopics(function(err,topics){
		if(err){
			return next(err);
		}

		res.render("admin/topiclist",{layout:"admin/layout",topics:topics});
	});
};


//删除主题
exports.delete = function(req,res,next){
	var topic_id = req.params.tid;
	TopicProxy.getTopicById(topic_id,function(err,topic){
		if(err){
			return next(err);
		}
		topic.remove(function(err){
			if(err){
				return next(err);
			}
			res.redirect("/admin/topic/list");
		});
	});
};


exports.create = function(req,res,next){
	var _title = req.body.title.trim();
	var _content = req.body.content.trim();
	TopicProxy.newAndSave(_title,_content,function(err){
		if(err){
			return next(err);
		}
		res.redirect("/admin/topic/list");
	});
};