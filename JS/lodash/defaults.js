const _ = require('lodash');

console.log(_.defaults({a:2},{a:1, b:2}));

function defaults(actual, defaults) {
    let retObj = {};
    _.each(defaults, (value, key) => {
        retObj[key] = !actual[key] ? value : actual[key];
    });
    return retObj;
}

console.log(defaults({a:2},{a:1, b:2}));
