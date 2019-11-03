function ajax(url,cb){
let xhr;
if(window.XMLHttpRequest){
    xhr = new XMLHttpRequest();
}else if(window.ActiveXObject){
    xhr = new ActiveXObject();
}
xhr.onreadyshatechange = function(res){
 if(xhr.readyState == 4 && xhr.status == 200)
 cb(xhr.responseText); 
}
}
xhr.open("GET",url,true);