function SuperType() {
    this.colors = [1,2,3];
}
SuperType.prototype.getSuperValue = function() {
    return this.property;
}




Function.prototype.myCall = function(context){
    var context = context || window;
    var args = [...arguments].slice(1);
    context.fn = this;
    var res = context.fn(...args);
    delete context.fn;
    return res;
}
console.log(22333);
console.log(11111);
console.log(45678);
function SubType() {
    SuperType.myCall(this);
}
SubType.prototype.getSubValue = function() {
    return this.subProperty;
}

//继承superProperty
SubType.prototype = new SuperType();


var instance = new SubType();
var instance2 = new SubType();
instance.colors.push(4);
console.log(instance2.colors);
function instanceOf(left,right){
    var proto = left.__proto__;
    var prototype = right.prototype;
    while(true){
        if(proto == null)
        return false;
        if(proto == prototype)
        return true;
        proto = proto.__proto__;
    }
}
