//实现sleep函数 利用promise延后执行几秒
sleep = (time) => {
    return new Promise((resolve) => {
        setTimeout(resolve,time);
    })
}
sleep = (time) => {
    return new Promise((resolve) => {
        setTimeout((resolve,time));
    })
}
sleep(5000).then(res => {
    console.log("finish");
})

//generator函数
function *sleep_generator(time) {
    yield new Promise(resolve => {
        setTimeout(resolve,time);
    })
}
sleep_generator(5000).next().value.then(() => {
    console.log("finish");
})
sleep_generator(6000).next().value.then(() =>{

})
//async await函数
async function sleep_async_await(time,func) {
    await new Promise(resolve => {
        setTimeout(resolve,time);
    })
     func();
}
sleep_async_await(5000,() =>{
    console.log("finish");
})
//利用es5的方法
function sleep_es5(callback,time) {
    if(typeof callback == 'function'){
        setTimeout(callback,time);
    }
}
function output() {
    console.log("finish");
}
sleep_es5(output,5000);

