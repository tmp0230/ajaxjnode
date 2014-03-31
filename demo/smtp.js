var nodemailer = require('nodemailer');

// Create a SMTP transport object
var transport = nodemailer.createTransport("SMTP", {
        //ok 的
        // service: 'Gmail', // use well known service.
        //                     // If you are using @gmail.com address, then you don't
        //                     // even have to define the service name
        // auth: {
        //     user: "marstommy@gmail.com",
        //     pass: "197802212410"
        // }

    //ok的
    // host: 'smtp.qq.com',
    // port: 465,
    // secureConnection:true,
    // // service: 'Gmail',
    // auth: {
    //   user: 'ajaxj@qq.com',
    //   pass: 'fj197802212410'
    // }


    host: 'smtp.163.com',
    port: 465,
    secureConnection:true,
    // service: 'Gmail',
    auth: {
      user: 'sh.i@163.com',
      pass: '19800821'
    }



    });

console.log('SMTP Configured');

// Message object
var message = {

    // sender info
    from: 'sh.i@163.com',

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

console.log('Sending Mail');
transport.sendMail(message, function(error){
    if(error){
        console.log('Error occured');
        console.log(error.message);
        return;
    }
    console.log('Message sent successfully!');

    // if you don't want to use this transport object anymore, uncomment following line
    //transport.close(); // close the connection pool
});