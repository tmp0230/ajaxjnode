/**
 * Created by Administrator on 14-3-27.
 */
var TagProxy = require("../proxy").Tag;

exports.edit_tags = function(req,res,next){
    TagProxy.getAllTags(function(err,tags){
        if(err){
           return next(err);
        }
         res.render('admin/tags',{layout:"admin/layout",tags:tags});
    });

};

exports.add = function(req,res,next){
    var name = req.body.name.trim();
    var description = req.body.description.trim();
    var background = req.body.background.trim();
    var order = req.body.order;
    //TODO  验证重复的TAG，验证name为空
    TagProxy.newAndSave(name,background,order,description,function(err){
        if(err){
            return next(err);
        }
        res.redirect("/admin/tags")
    });
}