//后台
var CookProxy = require("../proxy").Cook;
var CategoryProxy = require("../proxy").Category;
var UserProxy = require("../proxy").User;
var TagProxy = require("../proxy").Tag;
var TopicProxy = require("../proxy").Topic;

// admin 首页
exports.index = function(req,res,next){
    res.render('admin/index',{layout:'admin/layout'});
};

//初始化数据库
exports.initdb = function(req,res,next){
    //user
    UserProxy.newAndSave("name","loginname","pass","email",function(err){
        if(err){
            return next(err);
        }
    });

    //Cook
    CookProxy.newAndSave("title","content",function(err){
        if(err){
            return next(err);
        }
    });

    //Category
    CategoryProxy.newAndSave("name","cnname",function(err){
        if(err){
            return next(err);
        }
    });

    TagProxy.newAndSave("name","background",1,"description",function(err){
        if(err){
            return next(err);
        }
    });

    TopicProxy.newAndSave("title","content",function(err){
        if(err){
            return next(err);
        }
    });

    res.send("initdb");


};


//分类列表
exports.categorylist = function(req,res,next){

    res.render("admin/categorylist",{layout:"admin/layout",categorylist:result});

};

//添加分类
exports.addcategory = function(req,res,next){
    res.render("admin/addcategory",{layout:"admin/layout"});
};

//保存分类
exports.savecategory = function(req,res,next){
    var _name = req.body.name;
    var _cn = req.body.cn;
    CategoryProxy.newAndSave(_name,_cn,function(err,category){
        if(err){
            next(err);
        }else{
            res.redirect('/admin/categorylist');
        }
    });
};


//cook列表
exports.cooklist = function(req,res,next){
//    CookModel.find({},function(err,result){
//        if(err){
//            next(err);
//        }else{
//            res.render("admin/cooklist",{layout:"admin/layout",cooklist:result});
//        }
//    });

    res.render("admin/cooklist",{layout:"admin/layout",cooklist:result});
};

//添加cook
exports.addcook = function(req,res,next){
    res.render("admin/addcook",{layout:"admin/layout"});
}

exports.savecook = function(req,res,next){
    var _title = req.body.title;
    var _content = req.body.content
    Cook.newAndSave(_title,_content,function(err,cook){
        if(err){
            next(err);
        }else{
            console.log(cook);
            res.redirect("/admin/cooklist");
        }
    });
}

exports.delcook = function(req,res,next){
    var _id = req.query.id;
    CookModel.remove({_id:_id},function(err){
        if(err){
            next(err);
        }else{
            res.redirect("/admin/cooklist");
        }
    });
}
