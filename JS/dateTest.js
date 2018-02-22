'use strict';
const moment = require('moment');
const momentTZ = require('moment-timezone');


const june1 = 1496278630;
const now = moment.utc().unix();
const weekInSeconds = 7 * 86400;

const result = moment().add(10, 'minutes');
console.log(`moment().add(10, 'minutes')`, result);
console.log(`moment().add(0, 'minutes')`, moment().add(0, 'minutes'));
console.log(`moment().add('minutes', 1)`, moment().add('minutes', 1));

console.log('moment - date - Europe/Amsterdam', moment.tz(new Date(), 'Europe/Amsterdam').unix());
console.log('moment - date - America/Toronto', moment.tz(new Date(), 'America/Toronto').unix());
console.log('moment - date - UTC', moment.tz(new Date(), 'UTC').unix());
console.log('moment.utc().unix', moment.utc().unix());
console.log('moment().unix()', moment().unix());


console.log('moment - date - Europe/Amsterdam', momentTZ(new Date(), 'Europe/Amsterdam').unix());
console.log('moment - date - America/Toronto', momentTZ(new Date(), 'America/Toronto').unix());
console.log('moment - date - UTC', momentTZ(new Date(), 'UTC').unix());
console.log('moment utc unix', momentTZ.utc().unix());


console.log('moment()', moment());
console.log('moment().format()', moment().format());
console.log('moment().unix()', moment().unix());
console.log('momentTZ().tz(Europe/London).unix()', momentTZ().tz('Europe/London').unix());
console.log('moment().unix().format(YYYY-MM-DD)', moment(now*1000).format('YYYY-MM-DD'));
const time1 = momentTZ().tz('Europe/London').unix();
console.log('moment().unix().format(YYYY-MM-DD)', moment(now*1000).format('YYYY-MM-DD'));
console.log(' Europe/London format(YYYY-MM-DD)', momentTZ(time1*1000).tz('Europe/London').format('YYYY-MM-DD'));
console.log('moment.unix(now).format', moment.unix(now).format());
// console.log('start of day ', moment().utc().startOf('day').unix());
console.log('start of day', moment().utc().startOf('day').unix(), moment().utc().startOf('day').format('YYYY-MM-DD'));

const startDate = '2017-10-02';
const relativeStartDay = 1;
const timeZone = 'Europe/London';

// const time = momentTZ.tz(startDate, timeZone).add(relativeStartDay - 1, 'days').startOf('day').utc().unix();
// const time = momentTZ.tz(startDate, timeZone).startOf('isoWeek').utc().unix();
const time = momentTZ.utc(startDate).startOf('day').unix();
console.log('relativeStartDay ', time, moment.unix(time).format());
console.log(time, momentTZ.unix(time).format());

//let startOfCalendarWeek = momentTZ.unix(june1*1000).tz('UTC').startOf('week').unix();
//const startOfDay = momentTZ.unix(june1).tz('UTC').startOf('day').unix();
//console.log(`Today : ${moment.utc(startOfDay*1000)}`);
//console.log(moment().format("DD-MM-YYYY"));

//let WeekStart = moment.unix(now*1000).tz('UTC').startOf('isoweek').unix();

//let weekStartEnd = getStartAndEndOfWeek(june1);
//console.log(weekStartEnd);

//let WeekStart = moment.unix(now*1000).tz('UTC').startOf('week').unix();
//WeekStart = Math.floor(WeekStart/1000);
//console.log(now, WeekStart);

//for ( var time=WeekStart; time<= now;) {
//    let start = time;
//    console.log(`${time}: ${moment.utc(time*1000)}`);
//    let end = time+=weekInSeconds;
//    if (end <= now){
//        console.log(`${start} : ${end}`);
//    }
//}

const weekStartEndTime = getStartAndEndOfWeek(1498437368);
console.log(moment(weekStartEndTime[0]*1000).utc(), moment(weekStartEndTime[1]*1000).utc());
function getStartAndEndOfWeek(anyWeekDayTimeStamp) {
  const startOfDay = momentTZ.unix(anyWeekDayTimeStamp).tz('UTC').startOf('day').unix();
  const weekDay = moment.utc(startOfDay*1000).isoWeekday();
  const mondayStartOfDay = startOfDay - ((weekDay-1) * 86400);
  const sundayEndOfDay = mondayStartOfDay + weekInSeconds;
  return [mondayStartOfDay,sundayEndOfDay];
}
//getstart(june1);
function getstart(anyWeekDayTimeStamp) {
    var current = new Date(anyWeekDayTimeStamp*1000);     // get current date    
    var weekstart = current.getDate() - current.getDay() +1;    
    var weekend = weekstart + 6;       // end day is the first day + 6 
    var monday = new Date(current.setDate(weekstart));  
    var sunday = new Date(current.setDate(weekend));
    console.log(monday,sunday);
}
function getStartAndEndOfWeek1(anyWeekDayTimeStamp) {
//    const startOfDay = momentTZ.unix(anyWeekDayTimeStamp*1000).tz('UTC').startOf('day').unix();
//    console.log(startOfDay);
//    var date = moment(anyWeekDayTimeStamp*1000),
//	begin = moment(date).startOf('week').isoWeekday(1).unix();
//    var dateString = moment.unix(anyWeekDayTimeStamp);
//    
//    console.log(date, begin, dateString.startOf('isoWeek').startOf('day').unix());
    
  const startOfDay = momentTZ.unix(anyWeekDayTimeStamp).tz('UTC').startOf('day').unix();
  const weekDay = moment.utc(startOfDay*1000).isoWeekday();
  console.log(moment(startOfDay*1000),startOfDay, weekDay);
    
  const mondayStartOfDay = startOfDay - (weekDay * 86400);
  const sundayEndOfDay = startOfDay + weekInSeconds - 1;
    console.log(moment(mondayStartOfDay*1000),moment(sundayEndOfDay*1000));
  return [mondayStartOfDay, sundayEndOfDay];
}


if (0) {
    //const startOfDay = moment.unix(event.timestamp).tz(timezone).startOf('day').unix();
// TBD: timezone
const startOfDay = momentTZ.unix(now).tz('UTC').startOf('day').unix();
console.log(moment().format("DD-MM-YYYY"));
console.log(moment().format("YYYY-MM-DD"));
console.log(`moment.utc().unix(): ${now}`);
console.log(`Today : ${moment.utc(startOfDay*1000)}`);
//console.log(`day : ${moment().isoWeekday()}`);
//console.log(`startOfDay: ${startOfDay}`);

//const yesStart = startOfDay - (24 * 60 * 60);
//console.log(`yesterday : ${moment.utc(yesStart*1000)}`);
//console.log(`moment.utc().unix(): ${now}`);

//function getNextMondayStartTimestamp(startDate) {
//    console.log('getNextMondayStartTimestamp');
//    const ts = moment.utc(startDate).unix();
//    console.log(ts);
//    const m = moment.utc(startDate);
//    console.log(m);
//    const weekDay = moment.utc(startDate).isoWeekday();
//    console.log(moment.utc(startDate).isoWeekday());
//    const diff = 8 - weekDay;
//    const nextWeekStartTime = m.add(1, 'weeks').startOf('isoWeek').unix();
//    console.log(nextWeekStartTime);
////    moment().add(1, 'weeks').endOf('isoWeek')
//    console.log(ts + (diff*86400));
//    return ts + (diff*86400);
//
//}
function getNextMondayStartTimestamp(startDate) {
    const m = moment.utc(startDate);
    console.log(m.unix());
    const nextWeekStartTime = m.add(1, 'weeks').startOf('isoWeek').unix();
    return nextWeekStartTime;

}
function getNextMondayEndTimestamp(startDate) {
    const m = moment.utc(startDate);
    const nextWeekStartTime = m.add(1, 'weeks').startOf('isoWeek').unix();
    return nextWeekStartTime + 86400;

}
function getLastMondayStartTimestamp() {
    const weekDay = moment().isoWeekday()
    const lastMondayStartOfDay = startOfDay - ((weekDay+6)*86400);
    return lastMondayStartOfDay;
}

function getLastSundayEndTimestamp() {
    const lastMondayStartOfDay = getLastMondayStartTimestamp();
    const lastSundayEndOfDay = lastMondayStartOfDay + (6*86400) + 86399;
    return lastSundayEndOfDay;
}
//console.log(`last monday : ${moment.utc(getLastMondayStartTimestamp()*1000)}`);
//console.log(`last sunday : ${moment.utc(getLastSundayEndTimestamp()*1000)}`);
//getNextMondayStartTimestamp('2017-01-02');
console.log(getNextMondayStartTimestamp('2017-01-02'));
console.log(getNextMondayEndTimestamp('2017-01-02'));
}
