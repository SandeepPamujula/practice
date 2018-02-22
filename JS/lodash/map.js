'use strict';

const _ = require('lodash');

function square(n) {
  return n * n;
}
 /*
_.map([4, 8], square);
// => [16, 64]
 
_.map({ 'a': 4, 'b': 8 }, square);
// => [16, 64] (iteration order is not guaranteed)
 
var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];
 
// The `_.property` iteratee shorthand.
_.map(users, 'user');
// => ['barney', 'fred']

*/

function map(obj, fn) {
    let result = [];
    if(Array.isArray(obj) || obj instanceof Object) {
      _.each(obj, val => {
          result.push(fn(val));
      })  
    } else {
        console.log(obj);
    }
    return result;
}

console.log(map([4,8], square));
console.log(map({ 'a': 4, 'b': 8 }, square));