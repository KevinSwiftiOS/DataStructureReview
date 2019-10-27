var o1 = {name:'value'};
var o2 = new Object({name:'value'});
var M = function() {
    this.name = 3;
}
var o3 = new M();
var P = {name:'o4'};
var o4 = Object.create(P);