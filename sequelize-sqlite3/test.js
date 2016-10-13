
var _ = require('underscore');
var arr = [];
//
//arr['one']='hello';
//arr['two']='hi';
//arr['three'] = 'fine';
arr.push('one');
arr.push('two');
arr.push(33);
arr.push(34);
arr.push(33);
//arr.pop();
console.log("arr.length "+arr.length);
//console.log(arr['one']);
arr[10]='ten';
console.log("arr.length "+arr.length);
function longarray(ele,index,arr1){
    console.log('a['+index+']='+ele);
    console.log(arr1);
}
//arr.forEach(longarray);
console.log(arr);
console.log("index 1  "+ arr.indexOf(1));
console.log("index 2  "+ arr.indexOf(2));
console.log("index 3  "+ arr.indexOf(33));

Object.prototype.bad ='stuff';
console.log("_foreach -----------------------------");

_.forEach(arr,function(val,iter){
    console.log("arr iter: "+val,iter);
});
console.log("var in arr-----------------------------");

for (var i in arr){
    console.log(arr[i]);
}

console.log("-----------------------------");
var obj = {};
obj.one = 'hello obj';
obj.two = 'hi obj';
obj['three'] = 'fine obj';
//obj['three'] = 'fine obj';
console.log(obj);
console.log(obj.one);

_.each(obj,function(val){
    console.log("obj iter: "+val);
});