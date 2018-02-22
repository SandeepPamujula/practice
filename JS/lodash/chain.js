


const _ =  require('lodash');

// var users = [
//   { 'user': 'barney',  'age': 36 },
//   { 'user': 'fred',    'age': 40 },
//   { 'user': 'pebbles', 'age': 1 }
// ];
 

//  //find youngest
// let user = _.chain(users)
// 			.sortBy(users, 'age')
// 			.map(u => {
// 				// console.log(`${u.user} age is ${u.age}`);
// 				return `${u.user} age is ${u.age}`;
// 			})
// 			.head()
// 			.value(); 
// console.log(user);

const sid = 's%3A4ALmdzrPdkq4aS9SWBJq3e9d.cpT%2FJuEcFhoerYbGH3OpyJnyyAv%2FsxXZeq97lWGMVWI';
const headers = [
  '__cfduid=de9977d2245fc28c8e22f298d8647e3361512457016; expires=Wed, 05-Dec-18 06:56:56 GMT; path=/; domain=.propellerhealth.com; HttpOnly',
  `connect.sid=${sid}; Path=/; Expires=Tue, 05 Dec 2017 07:26:57 GMT; HttpOnly; Secure`
];

function getSessionId(str) {
  return str.indexOf('connect.sid') === 0;
}

const str = headers.filter(sessionStr => sessionStr.indexOf('connect.sid') === 0);


// const str = headers.filter(session => session.split(';').find(el => el.indexOf('connect.sid') === 0).split('=')[1]);
// const str = _.chain(headers)
//             .find(getSessionId)
//             .map(str => 's');
// const str = _.chain(headers)
// .find(getSessionId)
// .map(str => {
//   console.log(str);
//   return str;
// })
// .head().value();
console.log(str);