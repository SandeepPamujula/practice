var Sequelize = require('sequelize');
var sequelize = new Sequelize('database','username','password',{
                              host:'localhost',
                              dialect: 'sqlite',
                              storage:__dirname + '/pps/database.sqlite'
                              
                              });
var PCItem = require('./personalcatalogueitem'),
    households_has_catalogs = require('./households_has_catalogs');

//PCItem.hasMany(households_has_catalogs,{as:'households',costraints:'true'});
//PCItem.hasMany(households_has_catalogs,{constraints:'true'});
PCItem.hasMany(households_has_catalogs);
//PCItem.belongsTo(households_has_catalogs,{as:'HH',costraints:'false'});

PCItem.findAll({
//        include:[{households_has_catalogs,{as:'households'}}],
//        include:[{model:households_has_catalogs,as:'HH'}],
        include:[households_has_catalogs],//targetDevices
        where:{
            uri :['LnrCat1','catalog57'],
            state: 'DELETED'  
        },
//        attributes:['personalcatalogueitem.type','personalcatalogueitem.uri',[sequelize.fn('COUNT',sequelize.col('personalcatalogueitem.uri')),'no_uri']]
//        attributes:[[sequelize.fn('COUNT',sequelize.col('personalcatalogueitem.uri')),'no_uri'],'type','uri']
    attributes:[['type','bookingType'],['uri','id'],['contentInstanceId'],['uri','recordingState'],['uri','recordingContentState'],['uri','created'],['uri','lastModified'],['uri','id'],['uri','id'],['uri','id'],['uri','id'],['uri','id'],['uri','id']]
    
//    ['uri','type']
    }).then(function(item){
    console.log("\n========================================================\n");
    console.log(JSON.stringify(item)); 
    console.log("\n========================================================\n");
});