//parse方法，用来解析json字符串，构造由字符串描述的js对象，提供可选的reviewer函数用在
//返回之前对所得的对象再执行变换

//第一种方法，直接调用eval 避免使用该方法，执行的代码有执行者的权利，执行的字符串代码被恶意方使用的话，可能会在网页/扩展权限下使用

function jsonParse(opt){
    return eval('(' + opt + ')');
}
var b = JSON.stringify({"name":"ckq"});
console.log(jsonParse(b));
//使用 new Function的机制
var jsonStr = '{"age":20,"name":"ckq"}';
var json = (new Function('return' + jsonStr))();
console.log(json);