
var _ = require('underscore');

Object.prototype.bad ='stuff';

var arr = [];
var obj = {};

console.log( "typeof arr "+typeof arr);
console.log( "typeof obj "+typeof obj);
//
//arr['one']='hello';
//arr['two']='hi';
//arr['three'] = 'fine';

console.log(" ************* push , pop, shift and unshift ******************** ")
arr.push('one');
arr.push('two');
arr.push(33);
arr.push(34);
arr.push(33);
console.log(arr);
var popedElement =  arr.pop();
console.log("poppedElement "+popedElement);
console.log(arr);
var shift = arr.shift();
console.log(shift);
console.log(arr);
var unshift = arr.unshift('first');
console.log("unshift "+unshift);
console.log(arr);

console.log(" ************* filter, splice and slice ******************** ")
arr[0]=01;
arr[1]=11;
arr[2]=22
arr[3]=33;
arr[4]=44;
arr[5]=55;
console.log(arr);

function isbig(value){
    return value>10;
        
}
var fileterd = arr.filter(isbig);
console.log("filtered "+ fileterd);

var sliced = arr.slice(1,2);
console.log("sliced :"+sliced);
console.log(arr);

var spliced = arr.splice(0,2,200,300);
console.log("spliced :"+spliced);
console.log(arr);


console.log(" ************* indexOf(), lastIndexOf(), find(), findIndex() ******************** ")

console.log("arr.length "+arr.length);
//console.log(arr['one']);
arr[10]=200;
console.log("arr.length "+arr.length);
function longarray(ele,index,arr1){
    console.log('a['+index+']='+ele);
    console.log(arr1);
}
//arr.forEach(longarray);
console.log(arr);
console.log("index 200  "+ arr.indexOf(200));
console.log("index 2  "+ arr.indexOf(2));
console.log("index 3  "+ arr.indexOf(33));

console.log("arr.lastIndexOf(200) "+ arr.lastIndexOf(200));


var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function findCherries(fruit) { 
    return fruit.name === 'cherries';
}
console.log("inventory: "+JSON.stringify(inventory));
console.log("inventory.tostring: "+JSON.stringify(inventory.toString()));
console.log("findCherries "+JSON.stringify(inventory.find(findCherries)));

console.log("_foreach -----------------------------");

_.forEach(arr,function(val,iter){
   console.log("--> arr iter: "+val,iter);
});
console.log("var in arr-----------------------------");
console.log(arr);
console.log("-----------------------------");

for (var i in arr){
   console.log(arr[i]);
}

console.log("-----------------------------");

obj.one = 'hello obj';
obj.two = 'hi obj';
obj['three'] = 'fine obj';
//obj['three'] = 'fine obj';
console.log(obj);
console.log(obj.one);

_.each(obj,function(val){
    console.log("obj iter: "+val);
});

var myMap = new Map();

myMap.set(1, 'myVal');
myMap.set(2, { catName: 'Meow', age: 3 });

console.log(myMap.get(1));
console.log(myMap.get(2));
