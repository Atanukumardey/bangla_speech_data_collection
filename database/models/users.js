import { Model, DataTypes } from 'sequelize';
import DBConnection from '../connection';

const initUsers = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Users.hasMany(models.MetaData,{
        foreignKey: 'provider_id',
        as: 'MetaData',
        onDelete: 'CASCADE',
      });
      models.Users.hasMany(models.SessionInfo,{
        foreignKey: 'user_id',
        as: 'SessionInfo',
        onDelete: 'CASCADE',
      });
      models.Users.hasMany(models.ProcessedData,{
        foreignKey: 'annotator_id',
        as: 'aProcessedDataRef',
        onDelete: 'CASCADE',
      });
      models.Users.hasMany(models.ProcessedData,{
        foreignKey: 'verifier_id',
        as: 'vProcessedDataRef',
        onDelete: 'CASCADE',
      });
      models.Users.hasMany(models.DataFiles,{
        foreignKey: 'uploader_id',
        as: 'uDataFilesRef',
        onDelete: 'CASCADE',
      });
      models.Users.belongsTo(models.Regions, {
        foreignKey: 'region_id',
        as:"RegionRef",
        type: DataTypes.BIGINT,
      });
    }
  }
  Users.init({
    user_name: DataTypes.STRING,
    image_url: DataTypes.TEXT,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
    user_role: DataTypes.STRING,
    region_id: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};

export default initUsers(DBConnection, DataTypes);