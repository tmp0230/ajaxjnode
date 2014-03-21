var express = require("express");
var mongoose = require("mongoose");
var routes = require('./routes');

//app.init(config)		//也可以用于测试
var init = exports.init = function(config){
	//TODO A
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

	app.get('/', routes.index);

	return app;
}


if(!module.parent){
	var config = require("./config");		//装载配置文件
	var app = init(config);					//初始化配置,返回APP
	app.listen(process.env.PORT || 3000);
  	console.info("Express server listening on port in %s mode", app.settings.env);
}