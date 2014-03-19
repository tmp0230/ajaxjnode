//在所有的测试里只运行一次
before(function(){		
	console.log('before');
});

//一个it 运行一次
beforeEach(function(){
	console.log('beforeEach Test1');
});


describe('Test1',function(){
	describe("#Foo()",function(){
		it('should foo1',function(){

		});

		it('should foo2',function(){
			
		});
	});
});