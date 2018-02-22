
'use strict';

const _ = require('lodash');
const Promise = require('bluebird');
const co = Promise.coroutine;

co(function*(){
    console.log('start');
    const msg = yield getGen(['hi']);
//    const msg = yield Promise.resolve(' there');
    
    console.dir(msg[0]);
})();

//function getGen(val){
//    return new Promise().then(co(function*(val){
//        let msg = val;
//        let newMsg = yield Promise.resolve(' there');
//        return msg+newMsg;    
//    }));
//}

function getGen(val){
    return new Promise.map(val,(co(function*(val){
        let msg = val;
        let newMsg = yield Promise.resolve(' there');
        return msg+newMsg;    
    })));
}