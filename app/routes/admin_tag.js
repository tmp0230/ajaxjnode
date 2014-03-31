/**
 * Created by Administrator on 14-3-27.
 */
var TagProxy = require("../proxy").Tag;

exports.list = function(req,res,next){
    TagProxy.getAllTags(function(err,tags){
        if(err){
           return next(err);
        }
         res.render('admin/taglist',{layout:"admin/layout",tags:tags});
    });

};


exports.delete = function(req,res,next){
    var tag_id = req.params.tid;
    TagProxy.getTagById(tag_id,function(err,tag){
        if(err){
            return next(err);
        }
        tag.remove(function(err){
            if(err){
                return next(err);
            }
            res.redirect("/admin/tag/list");
        });
    });
}


exports.create = function(req,res,next){
    var name = req.body.name.trim();
    var description = req.body.description.trim();
    var background = req.body.background.trim();
    var order = req.body.order;
    //TODO  验证重复的TAG，验证name为空
    TagProxy.newAndSave(name,background,order,description,function(err){
        if(err){
            return next(err);
        }
        res.redirect("/admin/tag/list")
    });
}