//实现一个new操作符
//new内部干了什么 1.创建了一个全新的对象2.执行prototype链接 3 使this指向这个新创建的对象，4通过new创建的对象最终被prototype链接到这个函数的
//prototype上，5如果函数没有返回对象类型的Object，那么new表达式中的函数调用将返回这个引用
function obj(){
    this.name = "ckq";
    this.age = 18;
}
var one = new obj();
console.log(one);
function New(func){
  var res = {};
  if(func.prototype != null)
  res.__proto__ = func.prototype;
  var ret = func.apply(res,[...arguments].slice(1));
  if((typeof ret == 'object' || typeof res == 'function') && ret != null)
  return ret;
  return res;
}
var two = New(obj);
console.log(two);


Function.prototype.myCall = function(context){
    var context = context || window;
    context.fn = this;
    var args = [...arguments].slice(1);
    var res = context.fn(args);
    delete context.fn;
    return res;
}
Function.prototype.myApply = function(context){
    var context = context || window;
    context.fn = this;
    var res = arguments[1] ? context.fn(...arguments[1]) : context.fn();
    delete context.fn;
    return res;
}


function conso(age){
    console.log(this.name + age);
}
var now = {
    name:"ckq"
};
conso.call(now,1);
conso.myCall(now,1);
conso.myApply(now,[1]);

//函数柯里化
function curry(func){
    var _args = [];
    var that = this;
    let _curry = function(...args) {
        _args = _args.concat(...args);
        if(_args.length >= func.length){
            var res = func.apply(that,_args);
            return res;
        }
        return _curry;
    }
    return _curry;
}
function add(a,b,c){
    return a + b + c;
}
var curr = curry(add);
console.log(curr(1,2));
console.log(curr(3));