let o = {
    a:{
        b:2
    }
};
let o2 = o;
o = 2;
console.log(o2);
console.log(o);
//查看内存使用情况
//函数柯里化
function curry(func){
    var _args = [];
    var that = this;
    let _curry =  function(...args){
        _args = _args.concat(...args);
        if(_args.length >= func.length){
            return func.apply(that,_args);

        }else
        return _curry;
    }
    return _curry;

}
function add(a,b,c){
    return a + b + c;
}
var cu = curry(add);
console.log(cu(1)(3)(4));

//防抖 在函数不执行几秒后，才触发函数
function debouncee(func,wait){
    var time = null;
    return function() {
        if(time != null)
        clearTimeout(time);
        time = setTimeout(func,wait);
    }
}
function throttle(func,wait){
    var cur = new Date();
    var time = null;
    return function() {
        var now = new Date();
        if(now - cur >= wait){
            time = setTimeout(() => {
                func.apply(this,[...arguments]);
                cur = new Date();
            })
        }
    }
}

//myCall的实现
Function.prototype.myCall = function(context){
    var context = context || window;
    var args = [...arguments].slice(1);
    context.fn = this;
    var res = context.fn(...args);
    delete context.fn;
    return res;
}
var a = {
    "name":"ckq"
};
function call(age){
    console.log(this.name + age);
}
// call.myCall(a);

Function.prototype.myApply = function(context){
    var context = context || window;
    var args = [...arguments].slice(1);
    context.fn = this;
    var res = args ? context.fn(...args) : context.fn();
    delete context.fn;
    return res;
}
call.myApply(a,"18");
Function.prototype.myBind = function(context){
    var context = context || window;
    var args = [...arguments].slice(1);

    return function F() {
        if(this instanceof F){
            return new F();
        }else{
            return context.fn(...args);
        }

    }
}
//实现instanceof
function instanceOf(left,right){
    var proto = left.__proto__;
    var prototype = right.prototype;
    while(true){
        if(proto == null)
        return false;
        if(proto == prototype)
        return true;
        proto = proto.__proto__;
    }
}
function New(func){
    var res = {};
   if(func.prototype != null)
   res.__proto__ = func.prototype;
   var ret = func.apply(res,[...arguments].slice(1));
   if(typeof ret === 'object' && ret != null)
   return ret;
   return res;
}
function Partion(a,left,right){
    var Prio = a[left];
    while(left < right){
        while(left < right && Prio < a[right])
        right--;
      a[left] = [a[right],a[right] = a[left][0]]; //交换赋值
    }
}
