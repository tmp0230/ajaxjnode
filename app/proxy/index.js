//把代理的model的js 封装在index.js 里面
//用法：var User = require("../proxy").User
exports.User = require("./user");
exports.Cook = require("./cook");
exports.Category = require("./category");
exports.Topic = require("./topic");
exports.Tag = require("./tag");
exports.Option = require("./option");
exports.Article = require("./article");