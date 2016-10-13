
var person1 = {name: 'Marvin', age: 42, size: '2xM'};
var person2 = {name: 'Zaphod', age: 42000000000, size: '1xS'};

var sayHello = function(){
    console.log('Hello, ' + this.name);
};

var sayGoodbye = function(){
    console.log('Goodbye, ' + this.name);
};

//sayGoodbye();
//sayHello();

sayHello.call(person1);
sayHello.apply(person1);

var say = function(greeting){
    console.log(greeting + ', ' + this.name);
};

say.call(person1, 'Hello');
say.call(person2, 'Goodbye');

var dispatch = function(person, method, args){
    method.apply(person, args);
};
var update = function(name, age, size){
    this.name = name;
    this.age = age;
    this.size = size;
};

//update.call(person1, 'Slarty', 200, '1xM');
dispatch(person1, say, ['Hello']);
dispatch(person2, update, ['Slarty', 200, '1xM']);
sayHello.call(person2);