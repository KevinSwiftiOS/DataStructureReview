// var arr = [1,2,3];
// var arr2 = arr.map(item => item + 1);
// console.log(arr2);
// //reduce 将数组里面的值全部相加 接收为回调函数和初始值
// var sum = arr.reduce((acc,current) => acc + current,0);
// console.log(sum);
// //箭头函数是没有提升声明的 箭头函数没有属于自己的this argument
// //箭头函数不能作为构造函数 
// //每次then之后返回的是一个新的promise,如果在then中用了reutnr,
// //那么return的值会被promise.resolve()包装
// new Promise(resolve => {
//     resolve("hello1");
// }).then(res => {
//     return res + "2";
// }).then(res => {
//     console.log(res);
// })
// //如果一个函数加上了async 那么该函数返回的是一个promise
// async function test() {
//     return "ckq";
// }
// test().then(res => console.log(res));
// let a = 0;
// let b = async() => {
//     a = a + await 10;
//     console.log('2',a);
// }
// b();
// a++;
// console.log('1',a);


function wait(){
    return new Promise(resolve => {
        setTimeout(resolve,1000);
    })
};
async function main() {
    console.time();
//3个wait函数在赋值的时候已经开始执行了
   
    console.timeEnd();
}
main();

//典型的generator函数
function *foo(x){
    let y = 2 * (yield(x + 1)); //
    let z = yield (y / 3); //第二个参数为 第一个表达式 乘2  2 * 9 / 3 = 6
    return x + y + z;
}
let iter = foo(5);
console.log(iter.next());//6
console.log(iter.next(6));//4
console.log(iter.next(8));//5 + 12 + 4

//私有方法和私有属性 只能在类的内部访问，外部不能访问
class Widget{
    foo(baz){
        bar.call(this,baz);
    }
}
function  bar(baz) {
    return this.snaf = baz;
}
var widget = new Widget();
widget.foo("3232");
console.log(widget.snaf);

const bar = Symbol('bar');
const snaf = Symbol('snaf');

export default class MyClass{
    //共有方法
    foo(baz){
        this[bar](baz);
    }
    [bar](baz){
        return this[snaf] = baz;
    }
}
var obj = new Proxy({},{
    get:function(target,key,receiver){
        console.log(`getting ${key}!`);
        return Reflect.get(target,key,receiver);
    }
})

