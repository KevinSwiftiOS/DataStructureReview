//浅拷贝是只拷贝第一层的 使用object.asign来解决
// let a = {
//     age:1
// };
// let b = Object.assign({},a);
// a.age = 2;
// console.log(b.age);


// //通过展开运算符
// var c = {
//     age:1
// };
// var d = {...c};
// c.age = 5;
// console.log(d);

// var obj = {name:'ckq',age:11,pets:{sex:[1,2,3]}};
// //深拷贝 在堆区中再开辟一块新的空间 拷贝地址对应的具体内容，运用递归的思想
// function isObj(obj){
//     return obj instanceof Object;
// }
// function deepCopy(fromObj,toObj){
//     for(var key in fromObj){
//         var fromValue = fromObj[key];
//         //先检测第一个数是否为对象，如果没有就初始化一个空对象
//         if(!isObj(fromValue)){
//             toObj[key] = fromValue;
//         }else{
//             var tempObj = new fromValue.constructor;
//             deepCopy(fromValue,tempObj);
//             toObj[key] = tempObj;
//         }
//     }
// }
// var toObj = {};
// deepCopy(obj,toObj);
// console.log(toObj);
// console.log('start')
// setTimeout(() => {
//   console.log('timer1')
//   Promise.resolve().then(function() {
//     console.log('promise1')
//   })
// }, 0);
// setTimeout(() => {
//   console.log('timer2')
//   Promise.resolve().then(function() {
//     console.log('promise2')
//   })
// }, 0)
// Promise.resolve().then(function() {
//   console.log('promise3')
// })
// console.log('end');
// setTimeout(function(){
//     console.log("time1");
//    new Promise(resolve => {
//        resolve();
//    }).then(res => {
//        console.log("promise1");
//    })
// },0);

// setTimeout(function(){
//     console.log("time2");
//    new Promise(resolve => {
//        resolve();
//    }).then(res => {
//        console.log("promise3");
//    })
// },0);

