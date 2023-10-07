import { Model, DataTypes } from 'sequelize';
import DBConnection from '../connection';

const initRegions =  (sequelize, DataTypes) => {
  class Regions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        models.Regions.hasMany(models.ProcessedData);
        models.Regions.hasMany(models.DataFiles);
        models.Regions.hasMany(models.Users);
    }
  }
  Regions.init({
    region_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Regions',
  });
  return Regions;
};

export default initRegions(DBConnection, DataTypes);