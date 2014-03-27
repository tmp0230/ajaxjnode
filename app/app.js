var express = require("express");
var mongoose = require("mongoose");
var routes = require('./routes');				//前台
var admin = require('./routes/admin');			//后台控制器
var admin_tag = require('./routes/admin_tag');
var middleware = require('./middleware');		//中间件
var mongoose = require("mongoose");
var partials = require('express-partials');

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
        app.use(partials());
		app.use(express.static(__dirname + "/public"));
		app.use(app.router);
	});


	//routes 部分
	//app.get('/auth',middleware.require_auth_browser,routes)
	app.get('/', routes.index);

	//admin routes 部分
	app.get('/admin',middleware.require_auth_browser,admin.index);	//中间件加入用于验证

    app.get("/admin/categorylist/?",middleware.require_auth_browser,admin.categorylist);
    app.get("/admin/addcategory/?",middleware.require_auth_browser,admin.addcategory);
    app.post("/admin/savecategory/?",middleware.require_auth_browser,admin.savecategory);
//    app.get('/admin/delcategory/?',middleware.require_auth_browser,admin.delcategory);
//    app.get("/admin/editcategory/?",middleware.require_auth_browser,admin.editcategory);
//    app.post("/admin/editcategory/?",middleware.require_auth_browser,admin.editcategory);


//    app.get("/admin/userlist/?",middleware.require_auth_browser,admin.userlist);
//    app.get("/admin/adduserlist/?",middleware.require_auth_browser,admin.adduser);
//    app.post("/admin/saveuser/?",middleware.require_auth_browser,admin.saveuser);
//
//    app.get("/admin/topiclist/?",middleware.require_auth_browser,admin.topiclist);
//    app.get("/admin/addtopiclist/?",middleware.require_auth_browser,admin.addtopic);
//    app.post("/admin/savetopic/?",middleware.require_auth_browser,admin.savetopic);
//
//
//    app.get("/admin/cooklist/?",middleware.require_auth_browser,admin.cooklist);
//    app.get("/admin/addcook/?",middleware.require_auth_browser,admin.addcook);
//    app.post("/admin/savecook/?",middleware.require_auth_browser,admin.savecook);

    //admin tag
    app.get('/admin/tags',admin_tag.edit_tags);
    app.post("/admin/addtag",admin_tag.add);
	return app;
}


if(!module.parent){
	var config = require("./config");		//装载配置文件
	var app = init(config);					//初始化配置,返回APP
	app.listen(process.env.PORT || 3000);
  	console.info("Express server listening on port in %s mode", app.settings.env);
}