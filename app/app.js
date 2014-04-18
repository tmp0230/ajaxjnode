var express = require("express");
var mongoose = require("mongoose");

var mongoose = require("mongoose");
var partials = require('express-partials');
var jobservice = require("./services/job");


var routes = require('./routes');


//app.init(config)		//也可以用于测试能更好的引用别的配置文件,返回的是 已经配置好app对象
var init = exports.init = function(config){
	
	//初始就连接数据库
	var db_uri = config.default_db_uri;
	mongoose.connect(db_uri);

	//调用job
	// jobservice.fetchnews_job();

	var app = express();

	app.configure(function(){
		app.engine('html', require('ejs').renderFile);
		app.set("views",__dirname + "/views");
		app.set("view engine","html");

		app.use(express.bodyParser());
	  	app.use(express.methodOverride());
		app.use(express.cookieParser('your secret here'));
		app.use(express.session({secret: 'top secret'}));
        app.use(partials());
		app.use(express.static(__dirname + "/public"));
		app.use(app.router);
	});


	routes(app);
	
	return app;
    
}


if(!module.parent){
	var config = require("./config");		//装载配置文件
	var app = init(config);					//初始化配置,返回APP
	app.listen(process.env.PORT || 3000);
  	console.info("Express server listening on port in %s mode", app.settings.env);
};