//call和apply的使用

// var obj = {
//     "name":"ckq"
// };
// //call函数
// sayName.call(obj,"18");
// //apply函数 传递进去是数组
// sayName.call(obj,[20]);
// //bind不会立即执行
// var func = sayName.bind(obj,36);
// func();

//bind 只是会返回一个函数 
Function.prototype.myBind = function (context) {
  console.log(1);
    //context 接收第一个参数 随后再args中 利用arguments 将剩余参数全都取出来
    if (typeof this !== 'function') {
      throw new TypeError('Error')
    }
    var _this = this
   
    //截取后面的参数
    var args = [...arguments].slice(1);

    // 返回一个函数
    return function F() {
      console.log(2);
        console.log(this instanceof F);
        
      // 因为返回了一个函数，我们可以 new F()，所以需要判断
      if (this instanceof F) {
        console.log(3);
        console.log(...args);
        console.log(...arguments);
        return new _this(...args, ...arguments);
      }
   
      //实际上返回的是函数柯里化后的 东西 内部的等括号后再执行
      return _this.apply(context, args.concat(...arguments))
    }
  }



// function sayName(age){
//     console.log(this.name + ",age:" + age);
// }

function News(){
  this.name = "xxy";
}
function F(age) {
 this.age = age;
}
var third =   F.myBind({},20);
//这种情况下是全局作用域在调用 所以保留上面的函数作用域 _this来调用
var temp = new third();
console.log(temp);


// var func_second = sayName.myBind(obj,3232);
// func_second();

// //myCall方法
// Function.prototype.myCall = function(context){
//     //设置默认参数为window
//     var context = context || window;
//     //getValue(a,1,2) 改为 a.fn = getValue
//     context.fn = this;
//  //取出剩余的参数
 
//  var args = [...arguments].slice(1);
//  var result = context.fn(...args);
//  delete context.fn;
//  return result;
// }
// //改变this指向
// Function.prototype.myApply = function(context){
//     var context = context || window;
//     context.fn = this;
//     result = arguments[1] ? context.fn(...arguments[1]) :context.fn();
//     delete context.fn;
//     return result;
// }



// function temp(){
//     console.log(arguments);
//    console.log(Array.prototype.slice.apply(arguments));
// }
// temp(1,2,3);
// var _this;
// function now(){
//   console.log(22);
//   _this = this;
// }
// new _this();