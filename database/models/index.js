import Sequelize from 'sequelize';
import agegroups from './agegroups';
import datafiles from './datafiles';  
import dataquality from './dataquality';
import emotions from './emotions';
import metadata from './metadata';
import processeddata from './processeddata';
import regions from './regions';
import sessioninfo from './sessioninfo';
import users from './users';
import videotypes from './videotypes';
import DBConnection from '../connection';

const db = {};

db.VideoTypes = videotypes;
db.Regions = regions;
db.Emotions = emotions;
db.AgeGroups = agegroups;
db.DataQuality = dataquality;
db.Users = users;
db.DataFiles = datafiles;
db.MetaData = metadata;
db.SessionInfo = sessioninfo;
db.ProcessedData = processeddata;

Object.keys(db).forEach((modelName) => {
    if(db[modelName].associate){
        db[modelName].associate(db);
    }
});

db.DBConnection = DBConnection;
db.Sequelize = Sequelize;

export {db}