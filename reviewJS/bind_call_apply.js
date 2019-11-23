Function.prototype.myCall = function(context){
    var context = context || window;
    context.fn = this;
    var args = [...arguments].slice(1);
    var res = context.fn(...args);
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
Function.prototype.myBind = function(context){
    context = context || window;
    var that = this;
    var args = [...arguments].slice(1);
    return function F() {
        if(this instanceof F){
            return new that(...args,...arguments);
        }else{
            return that.apply(context,args.concat(...arguments));
        }
    }
}



function curry(func){
    var args = [];
    var that = this;
    var _curry = function(_args){
        args = args.concat(_args);
        if(args.length >= func.length)
        return func.apply(that,args);
        else
        return _curry;
    }
    return _curry;
}
Function.prototype.mybind = function(context){
    var context = context || window;
    var that = this;
    var args = [...arguments].slice(1);
    return function F(){
        if(this instanceof F){
            return new that(...args,...arguments);
        }else
        return that.apply(context,args.concat(...arguments));
    }
}
Function.prototype.myCall = function(context){
    var context = context || window;
    context.fn = this;
    var args = [...arguments].slice(1);
    var res = context.fn(...args);
    delete context.fn;
    return res;
}




function test(a,b,c){
    return a + b + c;
}
var cu = curry(test);
var res = cu(1)(2)(3);
console.log(res);

Function.prototype.myCall = function(context){
    var context = context || window;
    context.fn = this;
    var args = [...arguments].slice(1);
    var res = context.fn(...args);
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
