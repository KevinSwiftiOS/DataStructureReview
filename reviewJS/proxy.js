let obj = {
    a:1
};
let proxyObj = new Proxy(obj,{
    get:function(target,prop){
        console.log(222);
        return target[prop];
    },
    set:function(target,prop,value){
        targe[prop] = value;
    }
})
console.log(obj);
console.log(proxyObj.a);
