//使用promise封装ajax
//onloadstart 开始send函数
//onprogress 从服务器上下载数据每50ms触发
//onload 得到响应
//onerror 服务器异常
//onloaded 请求结束
//onreadystatechange 改变触发

const ajax = (obj) => {
    return new Promise((resolve,reject) => {
        let method = obj.method || 'GET';
        //创建xhr
        let xhr;
        if(window.XMLHttpRequest){
    xhr = new XMLHttpRequest();
        }if(window.ActiveXObject){
            xhr = new ActiveXObject();
        }
        //超时的监听
        xhr.ontimeout = function() {
            reject({
                errorType:'timeout_error',
                xhr:xhr
            })
        };
        //报错
        xhr.onerror = function(){
            reject({
                errorType:'onerror',
                xhr:xhr
            })
        };
        //监听statuschange
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4){
                if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
                    resolve(xhr.responseText);
                }else{
                    reject({
                        errorType:'onerror',
                        xhr:xhr
                    })
                }
            }
        };
        //发送请求
        if(method === 'POST'){
            xhr.open("POST",obj.url,true);
            xhr.responseType = 'json';
            xhr.setRequestHeader('Accept','application/json');
            xhr.send(JSON.parse(obj.data));
        }else{
            let query = ''
            for(let key in obj.data) {
                query += `&${encodeURIComponent(key)}=${encodeURIComponent(obj.data[key])}`
            }
            // The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
            query.substring(1)
            xhr.open('GET', obj.url, + '?' + query, true);
            xhr.send()
        }
    })
}