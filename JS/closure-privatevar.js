function Ninja(){
    
    var weapon = 'sword';
    
    this.getWeapon = function(){
        return weapon;
    }
    
}

var ninja = new Ninja();
console.log("ninja.getWeapon() "+ninja.getWeapon());
console.log("ninja.weapon "+ninja.weapon);



