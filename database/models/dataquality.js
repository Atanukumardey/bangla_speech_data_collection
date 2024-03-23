import { Model, DataTypes } from 'sequelize';
import DBConnection from '../connection';

const initDataQuality = (sequelize, DataTypes) => {
  class DataQuality extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.DataQuality.hasMany(models.ProcessedData,{
        foreignKey: 'data_quality_id',
        as: 'ProcessedData',
        onDelete: 'CASCADE',
      });
      models.DataQuality.hasMany(models.DataFiles,{
        foreignKey: 'data_quality_id',
        as: 'dqDataFiles',
        onDelete: 'CASCADE',
      });
    }
  }
  DataQuality.init({
    data_quality: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DataQuality',
  });
  return DataQuality;
};

export default initDataQuality(DBConnection, DataTypes);