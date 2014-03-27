var UserProxy = require("../proxy").User;

exports.index = function(req,res,next){
	
//	UserProxy.newAndSave("name1","loginname1","pass1","email1",function(err,user){
//		if(err){
//			next(err);
//		}else{
//			console.log(user);
//			res.send("index");
//		}
//	});
    res.render("index",{layout:'layout'});
};


