// setTimeout(() => {
//     console.log("timer1");
//     Promise.resolve().then(res => {
//         console.log("promise1");
//     })
// })
// process.nextTick(() => {
//     console.log("nextTick");

// process.nextTick(() => {
//     console.log("nextTick");

// process.nextTick(() => {
//     console.log("nextTick");

// process.nextTick(() => {
//     console.log("nextTick");
    
// })  
// })  
// })
// });
// console.log(123);
function A(){
    console.log("1");
}
function B() {
    console.log("2");
}
function C() {
    console.log("3");
}
// process.nextTick(() => {
//     A()
  
// });

setTimeout(() => {
   C();
},0);
setImmediate(() => {
    B();
});
