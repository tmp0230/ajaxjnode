var schedule = require("node-schedule");

var rule = new schedule.RecurrenceRule();


//每分钟
// var times = [];

// for(var i = 1; i<60;i++){
// 	times.push(i);
// }

// rule.second = times;

// var job = schedule.scheduleJob(rule,function(){
// 		console.log(new Date());
// });

// rule.minute = new schedule.Range(0,59,1);  每分种
// rule.second = new schedule.Range(0,59,5);	//每五秒

var job = schedule.scheduleJob(rule,function(){
	console.log(new Date());
});

