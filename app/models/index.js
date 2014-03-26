//用index.js 一次装载 require("./models") 所有的 model,并用exports.* 建立
var mongoose = require("mongoose");

/*
//可以在这个index.js里面启动连接mongodb,不用在app.js初始化里面
var config = require('../config').config;

mongoose.connect(config.db, function (err) {
  if (err) {
    console.error('connect to %s error: ', config.db, err.message);
    process.exit(1);
  }
});
*/

require("./topic")
require("./user");

exports.Topic = mongoose.model("Topic");
exports.User = mongoose.model("User");