const _ = require('lodash');
function Foo() {
  this.a = 1;
}
 
function Bar() {
  this.c = 3;
}
 
const instanceMethods = {
	proMethond : function() {
		this.pro = 6;
	}
};
Foo.prototype.b = 2;
Bar.prototype.d = 4;
const aObj = { 'a': 0 };

const foo = new Foo();
_.assign(aObj, foo, new Bar);
console.log(aObj);
// => { 'a': 1, 'c': 3 }

_.assign(aObj.prototype, foo.prototype);
console.log(aObj);


_.assign(aObj.prototype, instanceMethods);
console.log(aObj.proMethond);

