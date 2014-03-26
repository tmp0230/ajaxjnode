var express = require("express");
var mongoose = require("mongoose");
var routes = require('./routes');				//前台
var admin = require('./routes/admin');			//后台控制器
var middleware = require('./middleware');		//中间件
var mongoose = require("mongoose");


//app.init(config)		//也可以用于测试能更好的引用别的配置文件,返回的是 已经配置好app对象
var init = exports.init = function(config){
	
	//初始就连接数据库
	var db_uri = config.default_db_uri;
	mongoose.connect(db_uri);

	var app = express();

	app.configure(function(){
		app.engine('html', require('ejs').renderFile);
		app.set("views",__dirname + "/views");
		app.set("view engine","html");

		app.use(express.bodyParser());
	  	app.use(express.methodOverride());
		app.use(express.cookieParser('your secret here'));

		app.use(express.static(__dirname + "/public"));
		app.use(app.router);
	});


	//routes 部分
	//app.get('/auth',middleware.require_auth_browser,routes)
	app.get('/', routes.index);

	//admin routes 部分
	app.get('/admin',middleware.require_auth_browser,admin.index);	//中间件加入用于验证

	return app;
}


if(!module.parent){
	var config = require("./config");		//装载配置文件
	var app = init(config);					//初始化配置,返回APP
	app.listen(process.env.PORT || 3000);
  	console.info("Express server listening on port in %s mode", app.settings.env);
}