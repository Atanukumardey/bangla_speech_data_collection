require('pg')
import Sequelize from 'sequelize';
import config from './config/config.mjs';

let sequelize;
if (process.env.TARGET_ENV === 'awsdbproduction') {
  sequelize = new Sequelize(config.awsdbproduction);
} else if (process.env.TARGET_ENV === 'production') {
  sequelize = new Sequelize(config.production);
} else if (process.env.TARGET_ENV === 'staging') {
  sequelize = new Sequelize(config.staging);
} else if (process.env.TARGET_ENV === 'test') {
  sequelize = new Sequelize(config.test);
} else {
  sequelize = new Sequelize(config.development);
}

const DBConnection = sequelize;

export default DBConnection;