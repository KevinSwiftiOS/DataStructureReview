//参考链接：https://www.cnblogs.com/momo798/p/9177767.html
//函数防抖 当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次、
function debounce(func,wait) {
    let timeout;
    return function () {
        let context = this;
        let args = arguments;
        if(timeout)
            clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context,args);
        },wait);
    }
}
//立即执行版
function debounce(func,wait) {
    return function () {
        let context = this;
        let args = arguments;
        if(timeout)
            clearTimeout(timeout);
        let callNow = !timeout;
        timeout = setTimeout(() => {
            timeout = null;
        },wait);
        if(callNow)
            func.apply(context,args);
    }
}
//两者合璧版
function debounce(func,wait,immediate) {
    return function () {
        let context = this;
        let args = arguments;
        if(timeout)
            clearTimeout(timeout);
        if(immediate){
            var callNow = !timeout;
            timeout = setTimeout(() =>{
                timeout = null;
            },wait);
            if(callNow)
        func.apply(context,args);
        }else{
            timeout = setTimeout(()=>{
                func.apply(context,args);
            },wait);
        }
    }
}
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
