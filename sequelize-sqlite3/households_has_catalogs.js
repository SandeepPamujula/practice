var Sequelize = require('sequelize');
var sequelize = new Sequelize('database','username','password',{
                              host:'localhost',
                              dialect: 'sqlite',
                              storage:__dirname + '/pps/database.sqlite',
                              define:{
                                timestamps: false
                              }
                          });
module.exports = sequelize.define("households_has_catalogs", {
	   ppshouseholdId : Sequelize.INTEGER,  //acts as a foreign key to UPM's household table referencing the column 'id'
//       sande:Sequelize.STRING
    },{
      freezeTableName: true,
      tableName: 'households_has_catalogs'
  });
