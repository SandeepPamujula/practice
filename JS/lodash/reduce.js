
const _ =  require('lodash');
let s = _.reduce([1, 2], function(sum, n) {
  return sum + n;
}, 0);
console.log(s);
// => 3
 
let reducedObj = _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key);
  return result;
}, {});

console.log(reducedObj);
// => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)	