import { Model, DataTypes } from 'sequelize';
import DBConnection from '../connection';

const initVideoTypes = (sequelize, DataTypes) => {
  class VideoTypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.VideoTypes.hasMany(models.DataFiles,{
        foreignKey: 'video_type_id',
        as: 'vDataFilesRef',
        onDelete: 'CASCADE',
      });
    }
  }
  VideoTypes.init({
    video_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'VideoTypes',
  });
  return VideoTypes;
};

export default initVideoTypes(DBConnection, DataTypes);