//手写promise 自己实现一个promise
new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(1);
    },0);
}).then(value => {
    console.log(value);
})
//传入一个函数， 函数有2个参数resolve,reject 都是
//promise的回调函数 成功的回调resolve,和失败的reject


const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

function MyPromise(fn) {
  //  在函数体内部首先创建常量that，因为代码可能会异步执行，用于获取正确的this对象
    const that = this;
    that.state = PENDING;
    that.value = null;
    //保存then中的回调 当执行完then时可能还是promise
    that.resolvedCallbacks = [];
    that.rejectedCallbacks = [];
    //
    // 首先两个函数都得判断当前状态是否为等待中，因为规范规定只有等待态才可以改变状态
    // 将当前状态更改为对应状态，并且将传入的值赋值给 value
    // 遍历回调数组并执行
    function resolve(value) {
        if(that.state === PENDING){
            that.state = RESOLVED;
            that.value = value;
            that.resolvedCallbacks.map(cb => cb(that.value));
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
        fn(resolve,reject)
    }catch {e} {
        reject(e);
    }
}
MyPromise.prototype.then = function(onFulfilled, onRejected) {
    const that = this
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
        that.resolvedCallbacks.push(onFulfilled)
        that.rejectedCallbacks.push(onRejected)
    }
    else if(that.state === RESOLVED) {
        onFulfilled(that.value)
    }
    else {
        onRejected(that.value)
    }
}
