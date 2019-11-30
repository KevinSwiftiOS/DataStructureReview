//深拷贝
var a = {"name":"ckq"};
var b = Object.assign({},a);

b.name = "xxy";
console.log(a);
//使用json.stringFy
var c = JSON.parse(JSON.stringify(a));
c.name = "cxb";
console.log(c);
console.log(a);
var obj1 = {"name":[1,2,3]};
var obj2 = {};
deepCopy(obj1,obj2);
console.log(obj2);
//深拷贝
function deepCopy(fromObj,toObj){
    for(var key in fromObj){
        var fromValue = fromObj[key];
        if(typeof fromObj != 'object'){
            toObj[key] = fromValue;
        }else{
            var tempObj = new fromValue.constructor;
            deepCopy(fromValue,tempObj);
            toObj[key] = tempObj;
        }
    }
}
var fromObj = {"name":[1,2,3]};
var toObj = {};
deepCopy(fromObj,toObj);
console.log(toObj);