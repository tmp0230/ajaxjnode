// D:\projects\github\ajaxj\ajaxjnode\test\services>mocha mail.js
var mail = require("../../app/services/mail");

describe("services/mail.js",function(){
	describe("sendActiveMail",function(){
		it("should ok",function(done){
			var result = mail.sendActiveMail("ajaxj@qq.com",'token','ajaxj');
			console.log(result);
		});
	});
});


