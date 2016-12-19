

'use strict';

const Animal = function(name1){
    
    var name = !name1?'animal -->':name1;
    
        this.getName =  function(){
            return name;
        };
//        this.setName = function(n){
//            name = n;
//        };
};

Animal.prototype.setName = function(n) {
    this.name = n;
}

//Animal.getName();// is not a function
const dog = new Animal('doggy');
const animal = new Animal();
animal.setName('Ani');
console.log(animal.getName());
console.log(dog.getName());


let Person = {
    
    name:'person',
    getPerson: function(){
            return this.name;
    }
};

//let person = new Person();
//person.getPerson();

console.log(Person.getPerson());
console.log(Person.name);


class Vehical {
    
//    let name;
    constructor (name) {
        this.name = !name? 'vehicle':name;
    }
    
    getName(){
        return this.name;
    }
    

}

class Car extends Vehical {
    
//    this._color='';
    
    constructor(name,color){
        super(name);
        this._color = color;
    }
    setColor(color){
        this._color = color;
    }
    getColor(){
        return this._color;
    }
}

let v = new Vehical();

let c  = new Car('car','red');
console.log(v.getName());
console.log(c.getName());
//c.setColor('red');
console.log(c.getColor());


