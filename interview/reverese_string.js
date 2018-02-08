'use strict';

function reverse(str) {
    let buf='';
    let len = str.length;
    for (let i=len-1; i >=0; i--) {
        buf += str[i];
    }
    console.log(buf);
}

let buff = "sandeep";
reverse(buff);