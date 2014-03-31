var express = require("express");
var mongoose = require("mongoose");
var routes = require('./routes');				//前台
var admin = require('./routes/admin');			//后台控制器
var admin_category = require("./routes/admin_category");
var admin_cook = require("./routes/admin_cook");
var admin_user = require("./routes/admin_user");
var admin_topic = require("./routes/admin_topic");
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

	app.get("/admin/initdb",admin.initdb);

	//admin category
	app.get("/admin/category/list/?",middleware.require_auth_browser,admin_category.list);
	app.get("/admin/category/:cid/delete/?",middleware.require_auth_browser,admin_category.delete);
	app.post("/admin/category/create?",middleware.require_auth_browser,admin_category.create);

	//admin cook
	app.get("/admin/cook/list/?",middleware.require_auth_browser,admin_cook.list);
	app.get("/admin/cook/:cid/delete/?",middleware.require_auth_browser,admin_cook.delete);
	app.post("/admin/cook/create?",middleware.require_auth_browser,admin_cook.create);

	//admin user
	app.get("/admin/user/list/?",middleware.require_auth_browser,admin_user.list);
	app.get("/admin/user/:uid/delete/?",middleware.require_auth_browser,admin_user.delete);
	app.post("/admin/user/create?",middleware.require_auth_browser,admin_user.create);


	//admin topic
	app.get("/admin/topic/list/?",middleware.require_auth_browser,admin_topic.list);
	app.get("/admin/topic/:tid/delete/?",middleware.require_auth_browser,admin_topic.delete);
	app.post("/admin/topic/create?",middleware.require_auth_browser,admin_topic.create);

	//admin tag
    app.get('/admin/tag/list/?',middleware.require_auth_browser,admin_tag.list);
    app.get("/admin/tag/:tid/delete/?",middleware.require_auth_browser,admin_tag.delete);
	app.post("/admin/tag/create?",middleware.require_auth_browser,admin_tag.create);
	
	return app;



    // app.get("/admin/categorylist/?",middleware.require_auth_browser,admin.categorylist);
    // app.get("/admin/addcategory/?",middleware.require_auth_browser,admin.addcategory);
    // app.post("/admin/savecategory/?",middleware.require_auth_browser,admin.savecategory);
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

    
}


if(!module.parent){
	var config = require("./config");		//装载配置文件
	var app = init(config);					//初始化配置,返回APP
	app.listen(process.env.PORT || 3000);
  	console.info("Express server listening on port in %s mode", app.settings.env);
};