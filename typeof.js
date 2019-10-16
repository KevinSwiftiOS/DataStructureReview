//判断基本类型 因为虽然object.prototype.toString.call可以判断出来
//但是在对基本类型判断的时候，是将其升级为对象再进行判断的。
//所以判断类型 有如下3个步骤
/*
1.判断null
2.判断基础类型
3.使用object.prototype.toString.call()
 */
function getType(target) {
    //判断null类型
    if(target == null)
        return "null";
    //判断是不是基础类型
    const typeOfTarget = typeof target;
    if(typeOfTarget != 'object')
        return typeOfTarget;
    //那就是引用类型了 设置key-value 返回
    const template = {
        "[object Object]":"object",
        "[object Array]":"array",
        "[object Function]":"function",
        //包装类型
        "[object String]":"object - string",
        "[object Number]":"object - number",
        "[object Boolean]":"object - boolean",
    };
    const type = Object.prototype.toString.call(target);
    return template[type];
}
console.log(getType(function () {

}))
var a={}, b='123', c=123;
a[b]='b';
a[c]='c';
console.log(a[b]);
var a={}, b=Symbol('123'), c=Symbol('123');
a[b]='b';
a[c]='c';
console.log(a[b]);
