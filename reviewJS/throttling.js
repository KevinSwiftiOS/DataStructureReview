//函数节流 事件在一个管道中传输，加上这个节流阀后，事件的流速就会减慢，
//将一个函数的调用评率限制在一定阈值内，例如1s中，那么1s内该函数不会触发2次
//时间戳版
function throttle(func,wait){
    let prev = new Date();
    return function() {
        const args = arguments;
        const now = new Date();
        if(now - prev > wait){
            func.apply(this,args);
            prev = new Date();
        }
    }
}
//定时器版
function throttle(func,wait){
    let timeout;
    return function() {
        let context = this;
        let args = arguments;
        if(!timeout){
            timeout = setTimeout(() => {
                timeout = null;
                func.apply(context,args);
            })
        }
    }
}
//instanceof 判断
var obj = [1,2,3];
console.log(obj instanceof RegExp);
//左右两边联合判断
function instanceOf(left,right){
    let proto = left.__proto__; //左边是一个实例
    let prototype = right.prototype; //右边是构造函数
    while(true){
        if(proto == null)
        return false;
        if(proto == prototype)
        return true;
        proto = proto.__proto__;
}
}
function New(func){
    let res = {};
    if(func.prototype != null)
    res.__proto__ = func.prototype;
    var ret = func.apply(res,arguments.slice(1));
    if(typeof ret == 'object' || typeof res == 'function')
    return ret;

}
function instanceF(left,right){
    var proto = left.__proto__;
    var right = right.prototype;
    while(true){
        if(proto == null)
        return false;
        if(proto == prototype)
        return true;
       proto = proto.__proto__;
    }
}

function throttle(func,wait){
    var prev = new Date();
    return function() {
        var now = new Date;
        if(now - prev >= wait){
            func.apply(this,arguments);
            prev = new Date();
        }
    }
}
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

console.log(instanceOf(obj,Array));