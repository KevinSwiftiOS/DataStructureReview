var a = {"name":"ckq"};
var b = JSON.parse(JSON.stringify(a));
b.name = "caq";
console.log(a);
var c = Object.assign({},a);
c.name = "casa";
console.log(a);
//深拷贝的原理是递归调用 当发现当前数据类型不是基本类型的时候 递归调用本函数
function deepCopy(fromObj,ToObj){
    for(var key in fromObj){
        if(typeof fromObj[key] != "object"){
            ToObj[key] = fromObj[key];
        }else{
            var tempObj = new fromObj[key].constructor; //构造函数是使用fromObj[key]的
            deepCopy(fromObj[key],tempObj);
            ToObj[key] = tempObj;
        }
    }
}
var from = {"name":"3232","sex":[1,2,3]};
var kong = {};
deepCopy(from,kong);
console.log(kong);