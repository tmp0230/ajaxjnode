//这个是中间件,用于验证用户登录的

exports.require_auth_browser = function require_auth(req,res,next){
	if(req.user == undefined){
		next();
		console.log("auth");
	}else{

	}
	// 这段是pong
	// if(req.user != undefined){
	// 	next();
	// 	console.log("auth");
	// }else{
	// 	req.session.return_to = req.url;
	// 	res.statusCode = 401;
	// 	res.redirect("/admin/login");
	// }

	// if (!req.session.user) {
	//     res.render('notify/notify', {error: '未登入用户不能发布话题。'});
	//     return;
	//  }
	//  next();
	
};