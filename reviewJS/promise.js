//promise的基本使用
var promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("5");
    },1000);
})
promise.then(res => {
    console.log(res);
})
//手写promise 定义3个状态
const PENDING = "pending";
const FULLFILLED = "resolved";
const REJECTED = "rejected";
function MyPromise(func){
    const that = this;
    this.state = PENDING;
    this.fullfilledWorks = [];
    this.rejectedWorks = [];
    function resolve(value){
     
    if(that.state == PENDING){
        that.state = FULLFILLED;
        that.fullfilledWorks.map(cb => {
            console.log(222);
            cb(value);
        })
    }
    }
    function reject(value){
        if(that.state == PENDING){
            that.state = REJECTED;
            that.rejectedWorks.map(cb => {
                cb(value);
            })
        }
        }
    func(resolve,reject);
}
//定义then方法
MyPromise.prototype.then = function(res){
    if(this.state == PENDING){
        this.fullfilledWorks.push(res);
    }
}

var newPromise = new MyPromise((resolve,reject)=> {
    setTimeout(() => {
        resolve("4");
    },4000);
})
newPromise.then(res=> {
    console.log(res);
})

var a = [1,2,3];
