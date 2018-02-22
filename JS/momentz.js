const moment = require('moment-timezone');
const now = moment.utc().unix();
console.log('moment - date - Europe/Amsterdam', moment.tz(new Date(), 'Europe/Amsterdam').unix());
console.log('moment - date - America/Toronto', moment.tz(new Date(), 'America/Toronto').unix());
console.log('moment - date - UTC', moment.tz(new Date(), 'UTC').unix());
console.log('moment utc unix', moment.utc().unix());
console.log(moment.unix(now).format());
// const start = moment.unix(now).tz('UTC').startOf('week').unix();
// console.log(start, moment.unix(start).format());
const startNL = moment.unix(now).tz('Europe/Amsterdam').startOf('week').unix();

  //const goalTargetDate = planSubscription ? moment.unix(planSubscription.start + (plan.length * 84600)).tz(user.timeZone).format('YYYY-MM-DD') : null;

console.log(startNL, moment.unix(startNL).format());
const start = moment.utc(startNL*1000).unix();
console.log(start, moment.unix(start).format());

console.log(Date.now());

// var timeZones = moment.tz.names();
// console.log(timeZones);

// console.log(moment.unix(startVoteWeek).format('DD-MM-YY'), moment.unix(startVoteWeek).format());
// console.log(moment.unix(endVoteWeek).format('DD-MM-YY'), moment.unix(endVoteWeek).format());
// console.log(moment.unix(startChallengeWeek).format('DD-MM-YY'), moment.unix(startChallengeWeek).format());
// console.log(moment.unix(endChallengeWeek).format('DD-MM-YY'), moment.unix(endChallengeWeek).format());
