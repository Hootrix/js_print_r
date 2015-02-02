/*
js 版本的print_r()
Return 参数是用在递归函数里的，判断是alert()还是return
blank  参数是用于输出的样式更易于查看

问题是没有像php的print_r()一样输出多维数组样式
*/
function print_r(output, Return,blank) {
	function isArray(obj) {
		return obj && ( typeof obj === 'object') && (obj.constructor == Array);
	}
	function NumBlank(num) {
	var re = '';
		for(var i=0;i<num;i++)
		{
		re += ' ';
		}
		return re;
	}
	var blank = blank?NumBlank(3):'';
	var type = typeof(output);
	var echo = '';
	var Return = Return ? true: false;

	switch (type) {
	case 'number':
		{
			// document.write(output);
			echo += output;
			break;
		}
	case 'string':
		{
			echo += output;
			break;
		}
	case 'object':
		{
			var i;
			echo += "\n"+blank+"(\n";
			for (i in output) {
				var blank_ = isArray(output[i])?true:false;
				echo += blank +' [' + i + ']' + "=>" + print_r(output[i],1,blank_) + "\n";
			}
			echo += blank+")";
			break;
		}
	case 'undefined':
		{
			echo += "null";
			break;
		}
	}
	//if(Return){return echo;}else{alert(echo);};
	return Return ? echo: alert(echo);
	//alert(echo);

}
var arr = [];
arr['1'] = ['foo', 'bar', 'baz','qux'];
arr['1'][0] = ['foo', 'bar', 'baz','qux'];
arr['2'] = {
	a: 'c',
	b: 'c'
};
//arr['2'] = {'a':'a','b':'b'};
//arr['3'] = {};
// alert(typeof(arr));
print_r(arr);