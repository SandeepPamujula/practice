
'use strict';
function Ninja(){
    
    console.log('b4 local',x);
    var x = 2;
    console.log('after local',x);
    
}

console.log('b4 global:',x);
var x = 1;
console.log('after global:',x);
Ninja();



