const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn){
    console.log("cmimit");
    const that = this
    that.state = PENDING
    that.value = null
    that.resolvedCallbacks = []
    that.rejectedCallbacks = []

    function resolve(value) {
        if(that.state === PENDING) {
            that.state = RESOLVED
            that.value = value
            that.resolvedCallbacks.map(cb => cb(that.value))
        }
    }

    function reject(value) {
        if(that.state === PENDING){
            that.state = REJECTED
            that.value = value;
            that.rejectedCallbacks.map(cb => cb(that.value));
        }
    }
    try {
        fn(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
    const that = this;
    //对传入的两个参数做判断，如果不是函数将其转为函数
    onFulfilled =
        typeof onFulfilled === 'function'
            ? onFulfilled
            : v => v  // onFulfilled = v => v
    onRejected =
        typeof onRejected === 'function'
            ? onRejected
            : r => {
                throw r
            }

    if(that.state === PENDING) {
        //回调函数中push
        that.resolvedCallbacks.push(onFulfilled)
        that.rejectedCallbacks.push(onRejected)
    }
    else if(that.state === RESOLVED) {
        onFulfilled(that.value);
    }
    else {
        onRejected(that.value);
    }
}
var promise = new MyPromise((resolve,reject) => {
    setTimeout(() => {
        resolve("hello end");
    },3000);
})
promise.then((res1,res2) => {
    console.log(res1);
    console.log("finish");
})
//js的流程是单线程下来的 所以setTImeout会放在最后去执行。初始化构造promise的时候，传递进去的是一个函数 其中需要2个参数，参数都是函数。
//在构造函数中，执行该函数fn,fn中传入的实参便是构造函数中定义好的resolve和reject,随后resolve和reject便被保存进异步函数的操作过程中，由于js是单线程执行的，
//所以执行then方法，由于当前状态还是pending状态，所以将最终处理的回调函数保存进数组中，接下来异步函数执行完了，执行里面的resolve函数，resolve函数里面判断当前是pending状态，就转化为onfullfilled状态，执行里面由上文保存的最终处理的回调函数，并且将参数传入。
// 在then方法中将最终的回调函数保存进resolvedCallbacks方法中，
//随后去执行异步函数中的resolve方法。resolve方法将状态改变，将值传入，执行保存在数组中传递进来的onFullied函数
let x= {
    num:1,
    sum:function (data) {
        return this.num + data;
    }
}
let y = {
    num:1,
    sum:(data) => {
        return this.num + data;
    }
}
console.log(x.sum(1));
console.log(y.sum(1));
