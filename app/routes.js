
var auth = require('./middlewares/auth');

//routes 部分
	//app.get('/auth',middleware.require_auth_browser,routes)
	// app.get('/', routes.index);

var home = require("./routes/home");			//前台控制器

var admin = require('./routes/admin');			//后台控制器
var admin_category = require("./routes/admin_category");
var admin_cook = require("./routes/admin_cook");
var admin_user = require("./routes/admin_user");
var admin_topic = require("./routes/admin_topic");
var admin_tag = require('./routes/admin_tag');
var admin_option = require("./routes/admin_option");
var admin_article = require("./routes/admin_article");
var middleware = require('./middleware');		//中间件		

module.exports = function(app){



	app.get('/', home.index);
	app.get("/cooks",home.cooks);
	app.get("/articles",home.articles);


	//admin routes 部分
	app.get('/admin',auth.adminRequired,admin.index);	//中间件加入用于验证
	app.post("/admin/login/?",admin.login);
	app.get("/admin/logout/?",admin.logout);
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

	app.get("/admin/option/list/?",middleware.require_auth_browser,admin_option.list);
	app.get("/admin/option/:id/delete/?",middleware.require_auth_browser,admin_option.delete);
	app.post("/admin/option/create/?",middleware.require_auth_browser,admin_option.create);
	app.get("/admin/option/:id/edit/?",middleware.require_auth_browser,admin_option.edit);
	app.post("/admin/option/edit/?",middleware.require_auth_browser,admin_option.edit);

	app.get("/admin/article/list/?",middleware.require_auth_browser,admin_article.list);

};

