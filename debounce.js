//参考链接：https://www.cnblogs.com/momo798/p/9177767.html
//https://blog.csdn.net/Polaris_tl/article/details/99300458
//函数防抖 当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次、
 //非立即执行版 滑动了先不执行 等不滑了再执行
 function debounce(func,wait){
    var timeout = null;
    return function() {
        if(timeout)
        clearTimeout(timeout);
        timeout = setTimeout(func,wait);
    }
}
//立即执行版 滑动了马上执行以下
function debounce_3(func,wait){
    var timeout = null;
    var flag = true;
    return function() {
        clearTimeout(timeout);
        if(flag){
            func.apply(this,arguments);
            flag = false;
        }
        timeout = setTimeout(() => {
            flag = true;
        },wait);
    }
}
//两者合并版 是否传immediate进来
function debounce_merge(func,wait,isImmediate){
    var timeout = null;
    var flag = true;
    if(isImmediate){
        return function() {
            clearTimeout(timeout);
            if(flag){
                func.apply(this,arguments);
                flag = false;
            }
            timeout = setTimeout(() => {
              flag = true;
            },wait);
        }
    }else{
        return function() {
            if(timeout)
            clearTimeout(timeout);
            timeout = setTimeout(func,wait);
        }
    }
}

          window.addEventListener('scroll',debounce_merge(handle,1000,true));
//节流 当持续触发事件时，每隔n秒执行一次事件处理函数
//时间戳版
function throttle(func,wait) {
  let previous = 0;
  return function () {
      let now = Date.now();
      let context = this;
      let args = arguments;
      if(now - previous > wait){
          func.apply(context,args);
          previous = now;
      }
  }
}
//定时器版
function throttle(func, wait) {
    let timeout;
    return function() {
        let context = this;
        let args = arguments;
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null;
                func.apply(context, args)
            }, wait)
        }

    }
}

