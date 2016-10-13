

var latter;

var outvar = "out";

function outerfun(){
    
    
    var innerfun = function(){
        
        var innervar = "inner";
        
        console.log('outvar '+outvar );
        console.log('innervar '+innervar );
    }
    latter = innerfun;
}

outerfun();
latter();

