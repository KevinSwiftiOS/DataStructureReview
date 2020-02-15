//闭包的使用
function createFunctions() {
    var res = new Array();
    for(let i = 0; i < 10;i++){
        res[i] = function(){
            return i;
        }
    }
    return res;
}
var res = createFunctions();
console.log(res[0]());
//通过创建匿名函数 传入数
function create() {
    var res = new Array();
    for(var i = 0; i < 10;i++){
        //是一个立即执行函数 所以内部需要返回另外一个执行函数
        res[i] = (function(num){
        return function(){
            return num;
        }
        })(i);
    }
    return res;
}
var res1 = create();
console.log(res1[8]());

for(var i = 1;i <= 5;i++){
    setTimeout(function timer() {
     console.log(i);
    },1000);
};

//使用立即执行函数
for(var i = 1; i <= 5;i++){
    (function(i){
       setTimeout(function timer() {
        console.log(i);
       },1000);
    })(i);
}
