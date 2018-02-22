
'use strict';

const _ = require('lodash');

let car = {}
_.set(car,['type','0','x'], 'electric');
_.set(car,['type','1','y'], 'petrol');

console.dir(car.type[0]);
console.dir(car.type[1]);

const reqbody =  {restingHeartRate: {value: 8}, steps: {value: 1000}};
const targets = ['restingHeartRate', 'trainingsZoneUnder', 'trainingsZoneAbove', 'heartRateMax', 'weightLoss', 'exerciseMinutes'];
//const targetsUpdate = _.pick(reqbody, targets);
//console.log(targetsUpdate);

const eduCard = { 
    name: 'ACS MED Verbandadvies',
    timestamp: '2017-06-08T18:29:59Z',
    title: 'Heeft u nog een **pleister** op uw lies?',
    titleLong: 'Heeft u nog een pleister op uw lies?',
    imageSrc: 'ACS-623-03476540n_504-216-30-69.png',
    bodyLong: '![alt text](ACS-623-03476540n_504-216-30-69.png)\n**Verwijder de pleister als volgt:**\n\n*',
    style: 
     { titleColorInverted: false,
       cardType: 'EDUCATION',
       size: 'medium',
       imagePosition: 'left' },
    isPush: false,
    questions: [],
    userId: 3,
    ruleId: '8d54c1daf13920fddf7cbcebe344e3c8184d638d',
    _values: '{"bloodPressure.daysSinceLastData":null,"plan.day":2,"activeMinutes.target(since submodule start)":null}',
    _templateId: '585d3e04ff1b294b344dab24',
    _templateName: 'ACS MED Verbandadvies',
    contentElementId: '585d3e04ff1b294b344dab24',
    cardId: '5938d9e2099720068d7ced37'
};

const edu_insp_keys = ['timestamp', 'title', 'titleLong', 'bodyText', 'bodyLong', 'imageDescription', 'imageSrc',
  'isFavourite', 'isRead', 'isOpened', 'isShared', 'cardId', 'style'];
//const keys = _.pick(edu_insp_keys, _.keys(eduCard));
const keys = _.keys(_.pick(eduCard, edu_insp_keys));
console.log(keys);


//var goals = _.map(reqbody, (goal, observation) => ({
//    value:       goal,
//    observation: observation
//  }));

//console.dir(targetsUpdate);

//console.log(targets.map(target => target[0]));


//const status = targets.every(target => {
//    console.log(target, target.length);
//    return target.length >1});
//console.log(status);



//var object = { 'a': 1, 'b': '2', 'c': 3 };
// 
//console.log(_.pick(object, ['a', 'c', 'd']));

//
//const isMandatoryAttrPresent = function(data) {
//  const mandatoryAttr = ['firstName', 'lastName', 'country', 'dateOfBirth', 'timeZone'];
//  const allAttributes = _.keys(data);
//  let status = false;
//  if (mandatoryAttr.length === _.intersection(mandatoryAttr, allAttributes).length) {
//    status = true;
//  }
//  if (data.role && data.role !== 'MINOR') {
//      if (!(data.email && data.password)){
//          status = false;
//      }
//  }
//  return status;
//};
//
//const user = {
//    "id": 2,
//    "role": "COACH",
//    "firstName": "coach1",
//    "lastName": "One",
//    "country": "NL",
//    "language": "en",
//    "email": "coach1@example.com",
//    "dateOfBirth": "1980-09-13T00:00:00.000Z",
//    "gender": "Male",
//    "height": 200,
//    "weight": 120,
//    "unitOfMeasurement": "metric",
//    "timeZone": "Europe/Amsterdam",
//    "status": "Active",
//    "activationDate": "2015-02-18T13:57:28.000Z",
//    "password": "VerySecret!1",
//    "isConfirmed": 1
//  };
//
//  console.log(isMandatoryAttrPresent(user));
