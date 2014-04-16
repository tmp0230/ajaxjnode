var schedule = require("node-schedule");


exports.job1 = function(){
	
	var rule = new schedule.RecurrenceRule();
	rule.second = new schedule.Range(0,59,5);
	schedule.scheduleJob(rule,function(){
		console.log("job1:" + new Date());
	});
}


exports.job2 = function(){

	var rule = new schedule.RecurrenceRule();
	rule.second = new schedule.Range(0,59,1);
	schedule.scheduleJob(rule,function(){
		console.log("job2:" + new Date());
	});
}