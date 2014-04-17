var EventProxy = require('eventproxy');

var ep = EventProxy.create('tpl', 'data', function (tpl, data) {
 	console.log(tpl);
});


function a(test){
	ep.emit('tpl',test);
}

a("1");


