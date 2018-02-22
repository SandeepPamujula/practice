


const _ =  require('lodash');

var users = [
  { 'user': 'barney',  'age': 36 },
  { 'user': 'fred',    'age': 40 },
  { 'user': 'pebbles', 'age': 1 }
];
 
 function greaterThanOne(user) {
 	return user.age > 1;
 }

 //find age > 1
let user = _.filter(users, greaterThanOne); 
console.log(user);