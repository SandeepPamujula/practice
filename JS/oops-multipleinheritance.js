function A() {
  this.thisA = 4; // objC will contain this property
}

A.prototype.a = 2; // objC will contain this property

B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;

function B() {
  this.thisB = 55; // objC will contain this property

  A.call(this);
}

B.prototype.b = 3; // objC will contain this property

var aObj = new A();
console.log("A.a  "+aObj.a);


var bObj = new B();
console.log("b.a  "+bObj.a);
console.log("b.b  "+bObj.b);