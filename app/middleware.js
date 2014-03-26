//这个是中间件,用于验证用户登录的

exports.require_auth_browser = function require_auth(req,res,next){
	if(req.user == undefined){
		next();
		console.log("auth");
	}
	
};