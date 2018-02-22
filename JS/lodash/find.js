
const _ =  require('lodash');

var users = [
  { 'user': 'barney',  'age': 36 },
  { 'user': 'fred',    'age': 40 },
  { 'user': 'pebbles', 'age': 1 }
];
 
 //find age with 1


let user = _.find(users, {age:1}); 
console.log(user);