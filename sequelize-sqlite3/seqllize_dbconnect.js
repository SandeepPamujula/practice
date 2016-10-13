var Sequelize = require('sequelize');
//var sequelize = new Sequelize('database', 'username', 'password');

var sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  // SQLite only
  storage: 'database.sqlite'
});

var User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

var usr = User.findAll({
    where:{
        username:'deepu'
    },
    attributes:[['username','name'],['birthday','bDay']]
}).then(function (users){
    console.log("---> "+ JSON.stringify(users));
});


//    .success(console.log)
//    .failure(console.log)
//    .error(console.log);
//
//sequelize.sync().then(function() {
//  return User.create({
//    username: 'sandeep',
//    birthday: new Date(1986, 7, 1)
//  });
//}).then(function(sande) {
//  console.log(sande.get({
//    plain: true
//  }));
//});

