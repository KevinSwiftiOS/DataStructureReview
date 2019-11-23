//数组常见方法
var arr = [1,2,3];
arr.push(4);
console.log(arr);
//unshift 数组开头添加一个或多个元素，并且返回新的数组
arr.unshift(5,6);
console.log(arr);
//shift 删除第一个元素
arr.shift();
console.log(arr);
//splice 删除起点 长度
arr.splice(0,2);
console.log(arr);
//插入 [2,0,a,b] 从位置2开始 插入a b 第二个表示删除几个值 如果为0  就不删除
arr.splice(0,0,7,7,7);
console.log(arr);
//数组连接 arr.concat
var arrs = arr.concat([1,2,3]); //不会改变arr 会返回新的arrs
console.log(arrs);
var str = arr.join();
console.log(str); //默认用','相连，也可以用其余符号 例如‘-’