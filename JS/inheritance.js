'use strict';

function Car(n) {
    var name;
    // function setName(n){
    //     this.name = n;
    // }
    name = n;
    function getName() {
        return name;
    }
    return {
        // sn : setName,
        gn : getName
    }
}

let honda = new Car('Honda');
let ford = new Car('Ford');
// honda.prototype.move = function() {
//     console.log('car moving');
// }
Car.prototype.move = function() {
    console.log('car moving');
};
ford.__proto__.move = function() {
    console.log('figo moving');
}
console.log(honda.gn());
console.log(ford.gn())
honda.__proto__ = Car.prototype;
honda.move();
console.log(honda.__proto__ == Car.prototype);
// console.log(honda.__proto__.__proto__ == Object.prototype);
// console.log(Car.__proto__.__proto__ == Object.prototype);
console.log('honda.__proto__');
console.dir(honda.__proto__);
console.log('Car.prototype');
console.dir(Car.prototype);
console.log('honda.prototype');
console.dir(honda.prototype);
console.log('Car.__proto__');
console.dir(Car.__proto__);
ford.move();
