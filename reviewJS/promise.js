
//promise基本使用
var promise = new Promise((resolve,reject) => {
    setTimeout(() =>{
resolve("4");
    },4000);
})
promise.then(res => {
    console.log(res);
})
var arr = [2,3];
arr.map(cb => {
    console.log(cb);
})

var PENGDING = "pending";
var RESOLVED = "resolved";
var REJECTED = "rejected";
function MyPromose(func){
     this.states = PENGDING;
     this.fullfilledTasks = [];
     this.rejectedTasks = [];
    var that = this;
    function resolved(value){
        that.states = RESOLVED;
        that.fullfilledTasks.map(cb =>{
            cb(value);
        })
    }
    function rejected(value){
        that.states = REJECTED;
        that.rejectedTasks.map(cb =>{
            cb(value);
        })
    }
    func(resolved,rejected);
}
MyPromose.prototype.then = function(fullfilled,rejected){
    if(this.states == PENGDING){
        this.fullfilledTasks.push(fullfilled);
    }
    if(this.states == PENGDING){
        this.rejectedTasks.push(rejected);
    }
}
var pro = new MyPromose((resolve,rejected) => {
    setTimeout(() => {
        resolve("5");
    },5000);
})
pro.then(res => {
    console.log(res);
})