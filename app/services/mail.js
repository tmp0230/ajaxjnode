var mailer = require('nodemailer');
var config = require('../config').config;
var marked = require('marked-prettyprint');
var util = require('util');

// var transport = mailer.createTransport('SMTP', config.mail_opts);
// var SITE_ROOT_URL = 'http://' + config.host;


// /**
//  * private
//  *发送邮件的程序
//  *@param {Object} data 邮件对象{from:from,to:to,subject:subject,html:html}
//  */
// var sendMail = function(data){
// 	transport.sendMail(data,function(error){
// 		if(error){
// 	        console.log('Error occured');
// 	        console.log(error.message);
// 	        return;
//     	}
//     	console.log('Message sent successfully!');
// 	});
// }


exports.sendActiveMail = function(to,token,name){

	var transport = mailer.createTransport("SMTP", {
        //service: 'Gmail', // use well known service.
                            // If you are using @gmail.com address, then you don't
                            // even have to define the service name
        auth: {
            user: "sh.i@163.com",
            pass: "19800821"
        }
    });



	// var from = config.mail_opts.auth.user//util.format('%s <%s>',config.name,config.mail_opts.auth.user);
	// var to = to;
	// var subject = config.name + '社区账号激活'
	// var html = '<p>您好：<p/>' +
 //    '<p>我们收到您在' + config.name + '社区的注册信息，请点击下面的链接来激活帐户：</p>' +
 //    '<a href="' + SITE_ROOT_URL + '/active_account?key=' + token + '&name=' + name + '">激活链接</a>' +
 //    '<p>若您没有在' + config.name + '社区填写过注册信息，说明有人滥用了您的电子邮箱，请删除此邮件，我们对给您造成的打扰感到抱歉。</p>' +
 //    '<p>' + config.name + '社区 谨上。</p>';

 //    var message = {
 //    	from:from,
 //    	to:to,
 //    	subject:subject,
 //    	html:html	
 //    }


 	var message = {

    // sender info
    from: 'Sender Name <sender@example.com>',

    // Comma separated list of recipients
    to: 'ajaxj@qq.com',

    // Subject of the message
    subject: 'Nodemailer is unicode friendly ✔', //

    headers: {
        'X-Laziness-level': 1000
    },

    // plaintext body
    text: 'Hello to myself!',

    // HTML body
    html:'<p><b>Hello</b> to myself <img src="cid:note@node"/></p>'+
         '<p>Here\'s a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@node"/></p>'

   
};



	transport.sendMail(message, function(error){
	    if(error){
	        console.log('Error occured');
	        console.log(error.message);
	        return false;
	    }
    	return true;
	});
};