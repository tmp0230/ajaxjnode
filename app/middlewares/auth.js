/**
 * 需要管理员权限
 */
exports.adminRequired = function (req, res, next) {
  if (!req.session.user) {
    return res.render('admin/login',{layout:false});
  }
  // if (!req.session.user.is_admin) {
  //   return res.render('admin/login');
  // }
  next();
};