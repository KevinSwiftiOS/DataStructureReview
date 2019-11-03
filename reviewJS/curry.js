//函数柯里化的实现 返回一个执行函数 add(1)(2)(3);
function add(a,b,c){
    return a + b + c;
}
function curry(func){
   let _args = [];
   function _curry(...args){
       _args = _args.concat(args);
       if(_args.length > func.length){
        const res = func(..._args);
        _args = [];
        return res;
       }
   }
   return _curry;
}