/*
js 版本的print_r()
Return 参数是用在递归函数里的，判断是alert()还是return
blank  参数是用于输出的样式更易于查看

问题是没有像php的print_r()一样输出多维数组样式
*/
function print_r(output, Return) {
	function isArray(obj) {
		return obj && ( typeof obj === 'object') && (obj.constructor == Array);
	}
	function NumBlank(num) {
	var word = "    ";
		if(typeof(num) == 'string')
		{
			return num.split(word).length
		}
		else
		{
			return num?new Array(num).join(word):'';
		}
	}
	t++;
	var blank = NumBlank(t);
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
			a++
			//alert(a);//1 2 3 11
			var blank = NumBlank(a);
			echo += "\n"+blank+"(\n";
			for (i in output) {
				echo += blank +' [' + i + ']' + "=>" + print_r(output[i],1) + "\n";
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
	return Return ? echo: alert(echo);


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
var a=t=0;
print_r(arr,0);
