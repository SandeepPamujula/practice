var Sequelize = require('sequelize');
var sequelize = new Sequelize('database','username','password',{
                              host:'localhost',
                              dialect: 'sqlite',
                              storage:__dirname + '/pps/database.sqlite'
                              
                              });
module.exports = sequelize.define("personalcatalogueitem", 
    {
        uri : Sequelize.STRING,
        created:	{ type: Sequelize.DATE, defaultValue: Sequelize.NOW },
        lastModified:	{ type: Sequelize.DATE, defaultValue: Sequelize.NOW },
        type:	{	
                type: Sequelize.ENUM,
                values: ['LINEAR-RECORDING', 'REMINDER','VOD-ASSET','SERIES-LINK','COLLAPSED-INSTANCE','PDL','RECOMMENDATION','LIST-ITEM']
            },
        state:{	
                type: Sequelize.ENUM,
                values: ['BOOKED', 'RECORDING','RECORDED','DOWNLOADING','DOWNLOADED','FAILED','DELETED','EXPIRED','ACTIVE', 'PAUSED']
            },
        notificationHandles : Sequelize.STRING,   //To check how to Use
        title : Sequelize.STRING,
        content : Sequelize.TEXT,
        contentId : Sequelize.STRING,
        user : Sequelize.STRING,
        startTime	: Sequelize.DATE,
        duration : Sequelize.STRING,
        channel : Sequelize.TEXT,
        channelId : Sequelize.STRING,
        scheduleInstance : Sequelize.STRING,
        bookingStartTime : { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
        bookingDuration : Sequelize.STRING,
       // seriesLink: Sequelize.STRING,
        recurrence : {
                        type: Sequelize.ENUM,
                        values: ['NONE','SERIES','SHOW','DAILY','WEEKLY','WEEKDAY','WEEKEND']
                    },
        isSynchronized : 'BOOLEAN',
        keep : 'BOOLEAN',
        lock : 'BOOLEAN',
        bookingType : {
                        type: Sequelize.ENUM,
                        values: ['TIME','EVENT']
                    },
        sizeOnDisk : Sequelize.BIGINT,
        playable : 'BOOLEAN',
        partialContent : 'BOOLEAN',
        contentPlayUri : Sequelize.STRING,
        endAvailability : Sequelize.DATE,
        pvr : Sequelize.STRING,
        error : Sequelize.STRING,
        seriesId : Sequelize.STRING,
        showId : Sequelize.STRING,
        startGuardTime : Sequelize.STRING,
        endGuardTime : Sequelize.STRING,
        priority : Sequelize.INTEGER,
        autoDeleteDays : Sequelize.INTEGER,
        recordingsToKeep : Sequelize.INTEGER,
        linkEpisodeType  : Sequelize.STRING,
        linkChannelType : Sequelize.STRING,
        recordingId : Sequelize.STRING,
        upnpId : Sequelize.STRING,
        assetExpiration: Sequelize.DATE,
        authorizationId	: Sequelize.STRING,
        list : Sequelize.STRING
  },{
      
      instanceMethods: {
			dealWithBooleans: function(){
                
            this.isSynchronized = (this.isSynchronized == 1);
            this.keep = (this.keep == 1);
            this.lock = (this.targetMessageNotification == 1);                
            this.playable = (this.buyingProtectionForOnDemand == 1);
            this.partialContent = (this.partialContent == 1);
                
				return this;
			}
		},
      freezeTableName: true,
      tableName: 'personalcatalogueitem'
  });
