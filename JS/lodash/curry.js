


const _ =  require('lodash');

const sid = 's%3A4ALmdzrPdkq4aS9SWBJq3e9d.cpT%2FJuEcFhoerYbGH3OpyJnyyAv%2FsxXZeq97lWGMVWI';
const headers = [
  '__cfduid=de9977d2245fc28c8e22f298d8647e3361512457016; expires=Wed, 05-Dec-18 06:56:56 GMT; path=/; domain=.propellerhealth.com; HttpOnly',
  `connect.sid=${sid}; Path=/; Expires=Tue, 05 Dec 2017 07:26:57 GMT; HttpOnly; Secure`
];

const getCookieFromCookieHeader = _.curry((cookieName, cookieHeader) => {  
    let str = '';
    const sessionArr = cookieHeader.filter(sessionStr => sessionStr.indexOf(cookieName) === 0);
    if (sessionArr.length > 0) {
        const sessionCookie = sessionArr[0].split(';')[0];
        if(typeof sessionCookie === 'string' && sessionCookie.indexOf(`${cookieName}=`) === 0) {
        str = sessionCookie.split('=')[1];
        }
    }
    return str;
});

const getSessionFromCookieHeader = getCookieFromCookieHeader('connect.sid');

const str = getSessionFromCookieHeader(headers);

console.log(str);