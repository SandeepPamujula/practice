const _ = require('lodash');
console.log(_.countBy([6.1, 4.2, 6.3], Math.floor));
console.log(Math.floor(6.6));

console.log(_.countBy([6.1, 4.2, 6.3], 'length'));
console.log(_.countBy(['one', 'two', 'three'], 'length'));
