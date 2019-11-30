//JSON.stringify方法
//过程 boolean|number|string类型会自动转换成对应的原始值
//undefined 任意函数以及symbol,会被忽略，或者会被转换成null
//不可枚举的属性会被忽略
//如果一个对象的属性值通过某种间接的方式指回该对象本身，即循环引用，属性也会被忽略。
var a = {
    name:"ckq"
}
console.log(JSON.stringify(a));
console.log(typeof JSON.stringify(a));
