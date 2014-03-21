var express = require("express");
var mongoose = require("mongoose");
var routes = require('./routes');


var init = exports.init = function(config){
	//TODO A
	var app = express();

	return app;
}


if(!module.parent){
	var config = require("./config");		//装载配置文件
	var app = init(config);					//初始化配置,返回APP
	app.listen(process.env.PORT || 3000);
  	console.info("Express server listening on port in %s mode", app.settings.env);
}