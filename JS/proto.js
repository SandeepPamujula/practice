'use strict';

// const obj = {a:2,b:3};
// console.log(obj);
// console.log(obj.prototype);
// console.log(Object.prototype);

// function fun(c,d) {
//     console.log(c,d);
// }

// console.log(fun.prototype);

let animal = {
    eats: true,
    walk() {
        console.log('animal walks');
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

let bunny = {
    earLength: 10,
};
bunny.__proto__ = rabbit;
bunny.walk();
console.log(bunny.jumps, bunny.earLength);

function Car() {

}
Car.prototype.drive = () => console.log('car moves');

let newCar = new Car();
newCar.drive();

