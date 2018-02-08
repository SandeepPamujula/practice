
function Ninja(){
    
    console.log('b4 local',x);
    var x = 2;
    console.log('after local',x);
    var weapon = 'sword';
    
    this.getWeapon = function(){
        return weapon;
    }
    
}
function printglobal() {
    console.log('printglobal ',x);
}
printglobal();
console.log('b4 global:',x);
var x = 1;
console.log('after global:',x);
var ninja = new Ninja();
console.log("ninja.getWeapon() "+ninja.getWeapon());
console.log("ninja.weapon "+ninja.weapon);



