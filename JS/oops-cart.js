function Cart(){

	this.cartName = "sande cart";
	this.items = [];
    this.addItem = function(item) {
	// body...
	this.items.push(item);
    };
}
//Cart.prototype.addItem = function(item) {
//	// body...
//	this.items.push(item);
//};

var cart1 = new Cart();
cart1.addItem("book");
console.log(cart1.items);
console.log(cart1.cartName);

var cart2 = new Cart();
cart2.addItem("mobile");
console.log(cart2.items);
console.log(cart2.cartName);