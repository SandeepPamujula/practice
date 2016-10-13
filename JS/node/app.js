var express = require('express');
var app = express();
 
'use strict'
app.get('/', function (req, res) {
    
 for (var i=1;i<1000000;i++){
     console.log("looping .. "+i);
 }
console.log('after loop -----------------------------------------------');
 res.send('Hello World!');
});

app.get('/sande', function (req, res) {
 res.send('Hello sande!');
});
 
app.listen(3344, function () {
 console.log('Example app listening on port 3344!');
});