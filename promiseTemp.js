
const promise = new Promise((r1,r2) => {
    //异步的操作
    if(1){
        //异步成功
        r1(1);
    }else{
        r2(2);
    }
})
//resolve函数作用将promise状态由pending改为fullfilled
//并且将异步操作的结果，作为参数传递到注册在then上的回调函数。
//reject函数将 Promise 对象的状态从 pending 变为 rejected ，在异步操作失败时调用，并将异步操作报出的错误，作为参数传递给注册在 then 方法上的回调函数（then方法的第二个参数）

function Promise(fn) {
    let that = this;
    that.status = "pending";
    that.value = ""; //存储promise的value
    that.reason = "";//存储promise的reason
    that.onFullFilledCb = [];//存储then方法中注册的回调函数(第一个回调函数)
    that.onRejectedCb = [];//存储then方法中注册的回调函数(第二个参数)

    function resolve(value) {
        if(that.status === "pending") {
            that.status = "fullfilled";
            that.value = value;
            that.onFullFilledCb.map(item => {
                item(that.value);
            })
        }
    }
    function reject(value) {
        if(that.status === "pending") {
            that.status = "rejected";
            that.value = value;
            that.onRejectedCb.map(item => {
                item(that.value);
            })
        }
    }
    //执行这2个函数
    fn(resolve,reject);
}
Promise.prototype.then = function (onFullfilled,onRejected) {
    onFullfilled = typeof onFullfilled === 'function' ? onFullfilled
        : v => v;
    onRejected = typeof onRejected === 'function' ? onRejected
        : r => {
        throw r;
        }
        if(that.state === PENDING)
}
