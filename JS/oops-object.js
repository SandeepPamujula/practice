var apple = {
    
    color : "red",
    getInfo : function(){
        console.log(this.color +" color Apple");
    }
}

apple.getInfo();


//Create an object using singleton when you need a constructor
var Orange = new function(){
    
    this.color = "OOrange";
    this.getInfo = function(){
        console.log(this.color +" color Orange");
    };
};

Orange.getInfo();