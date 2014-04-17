var schedule = require("node-schedule");
var OptionPrexy = require("../proxy").Option;

global.varA = 0;


function readoption(){
	OptionPrexy.getOptionByName("fetchnews",function(err,option){
		//global.varA = parseInt(option.value);
	});

}


exports.readoption_job = function(){

};


/**
 * 抓取新闻的定时任务
 */
exports.fetchnews_job = function(){

	

	// OptionPrexy.getOptionByName("fetchnews",function(err,option){
	// 	var i  = parseInt(option.value);
	// 	var rule = new schedule.RecurrenceRule();
	// 	rule.second = new schedule.Range(0,59,i);
	// 	schedule.scheduleJob(rule,function(){
	// 		console.log(new Date());

	// 	});
	// });
	console.log(global.varA)
	
	var rule = new schedule.RecurrenceRule();
	rule.second = new schedule.Range(0,59,global.varA);
	var j =schedule.scheduleJob(rule,function(){
		readoption();
		console.log(global.varA);
		if (global.varA == 6) {
			j.cancel();
		}
		// i++;
	});

	// j.cancel();

	

};