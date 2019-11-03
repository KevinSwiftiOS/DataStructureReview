//防抖和节流 防抖定义 在页面滚动的时候，连续滚动会多次触发其处理事件，所以防抖是当滚动不超过1000ms，例如，才触发处理事件
//节流 每1000ms触发处理函数
function debounce(func,wait){
let timeout;
return function() {
    let context = this;
    let args = arguments;
    if(timeout)
    clearTimeout(timeout);
    timeout = setTimeout(() => {
func.apply(context,args);
    },wait)
}
};

function debounce_liji(func,wait){
    return function() {
        let context = this;
        let args = arguments;
        if(timeout)
        clearTimeout(timeout);
        let callNow = !timeout;
        timeout = setTimeout(function() {
timeout = null;
        },wait);
        if(callNow)
        func.apply(context,args);
    } 
}
//节流 持续触发时，每隔一定事件执行处理函数
function throttle(func,wait){
    let previous = 0;
    return function() {
        let now = Date.now();
        let context = this;
        let arguments = arguments;
        if(now - previous > wait){
            func.apply(context,arguments);
            previous = now;
        }
    }
}