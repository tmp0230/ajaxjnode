//MongoDB connection URL for the app
exports.default_db_uri = "mongodb://ajaxj:273511@localhost/test";


var config = {
  debug: true,
  name: 'bangchu8.com',
  description: 'bangchu8.com 介绍',

    // mail SMTP
  mail_opts: {
    // host: 'smtp.163.com',
    // port: 25,
    service: 'Gmail',
    auth: {
      user: 'marstommy@gmail.com',
      pass: '197802212410'
    }
  },
}


module.exports.config = config;