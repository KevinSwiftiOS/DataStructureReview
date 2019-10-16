//函数柯里化的过程
//又称为部分求值，接收多个参数的函数 变换成接收一个参数，返回一个函数的过程。
function curry(func) {
    // 存储已传入参数
    let _args = []

    // 做一个闭包 剩余参数 将不定量参数作为数组
    function _curry(...args) {
        // 把参数合并
        _args = _args.concat(args)

        // 如果参数够了就执行
        if (_args.length >= func.length) {
            const result = func(..._args)
            _args = []
            return result;
        }
        // 继续返回此函数
        else {
            return _curry
        }
    }
    return _curry
}
var testAdd = curry(add1);

console.log(testAdd(1)(2)(3))
console.log(testAdd(1, 2)(3))
console.log(testAdd(1)(2, 3))

function doAdd2(num1,num2) {
    if (arguments.length == 1) {
        return function(y) {
            return num1 + y;
        }
    } else {
        return num1 + num2;
    }
}

console.log(doAdd2(2,3));

console.log(doAdd2(2)(3));//测试代码
function add1(a,b,c) {
    return a + b + c;
}

