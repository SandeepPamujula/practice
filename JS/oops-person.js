
//var Person = Person || {};
//var Person =   {} ;


function Person(name){
     (undefined == name) ? this.name = "person" : this.name = name;
}

Person.name = "pers";
console.log("==============================");
var personObj = new Person();
Person.prototype.dance = function() {
    
    console.log(this.name+ " is dancing... ");
    console.log("prototype "+this.prototype);
    console.log("__proto "+ this.__proto);
}

personObj.dance();
console.log("==============================");

var ninja = new Person('ninja');
ninja.dance  = function (){
        console.log(this.name+ " is fighting... ");
        console.log("prototype "+this.prototype);
        console.log("__proto "+ this.__proto);
        console.log(this.__proto__);
//        return this._super();
}
ninja.dance();
//console.log(JSON.parse({}.constructor));

console.log(ninja instanceof Person);
console.log(ninja.prototype instanceof Person);



// Sub Class
//
//var Person1 = Object.subClass({
//    name: 'person',
//    dance : function(){
//          console.log(this.name+ " is dancing... ");
//            console.log("prototype "+this.prototype);
//            console.log("__proto "+ this.__proto);
////            return this._super();
//    }
//});
//ninja.dance();
//
//
//var ninja = Person1.subClass({
//    name: 'ninja',
//    dance : function(){
//          console.log(this.name+ " is fighting... ");
//            console.log("prototype "+this.prototype);
//            console.log("__proto "+ this.__proto);
//            return this._super();
//    }
//});
//ninja.dance();