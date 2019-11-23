//ajax是异步js和xml,就是使xmlhttprequest与服务器进行通信，
//可以使用json xml html和text文本等格式发送和接收，
//异步特性，在不刷新网页的情况下，与服务器进行通信，交换数据

if(window.XMLHttpRequest){
    httpRequest = new XMLHttpRequest();
    //判断浏览器的兼容性

}else if(window.ActiveXObject){
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

//绑定onreadychange事件
httpRequest.onreadystatechange = function () {
    //当响应返回的时候 做一些事情
}

//向服务器发送请求
httpRequest.open("GET","http://www.example.com/some.file",true);
httpRequest.send();



//包装ajax
function ajax(url,cb) {
    let xhr;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange = function () {
        //判断状态 readyState的状态 0未初始化 1正在加载
        //2.加载成功 3.交互 4.完成交互
        if (xhr.readyState == 4 && xhr.status == 200) {
            //执行异步回调函数
            cb(xhr.responseText);
        }
    }
    xhr.open("GET",url,true);
    //可以告诉后台传递内容的编码方式
    xhr.setRequestHeader({"Content-Type":"application/x-www-form-urlencoded"});
  xhr.setRequestHeader("key=value1&key1=value2");
    xhr.send();
}
//ajax会自动带上同源的cookie,而不会带上不同源的cookie
//手写ajax
var xhr;
if(window.XMLHttpRequest){
    xhr = new XMLHttpRequest();
}
if(window.ActiveXObject){
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
}
//监听状态变化
xhr.onreadystatechange = function() {
    if(xhr.status == 200 && xhr.readyState == 4)
    
}