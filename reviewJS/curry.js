//函数柯里化的实现 返回一个执行函数 add(1)(2)(3);
function add(a,b,c){
    return a + b + c;
}
function curry(func){
    var args = [];
var that = this;
    var _curry = function(...arg){
        args = args.concat(...arg);
        if(args.length >= func.length)
        return func.apply(that,args);
        else
        return _curry;
    }
    return _curry;
}
var cur = curry(add);
console.log(cur(1)(2)(3));