const _ = require('lodash');

console.log(_.partition([1, 2, 3, 4], n => n!==0));

function condition(n) {
    return n%2;
}
function partition(arr, func) {
    let retArr = [];
    retArr[0] = [];
    retArr[1] = [];
    _.each(arr, ele => {
        const index = func(ele) ? 0 : 1;
        retArr[index].push(ele);
    });
    return retArr;
}
console.log(partition([1, 2, 3, 4], n => n!==0));
