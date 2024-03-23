import { Model, DataTypes } from 'sequelize';
import DBConnection from '../connection';

const initDataFiles = (sequelize, DataTypes) => {
  class DataFiles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.DataFiles.belongsTo(models.Regions, {
        foreignKey: 'initial_region_id',
        as: "InitialRegionRef",
        type: DataTypes.BIGINT,
        onDelete: 'CASCADE',
      });
      models.DataFiles.belongsTo(models.VideoTypes, {
        foreignKey: 'video_type_id',
        as: "VideoTypeRef",
        type: DataTypes.BIGINT,
        onDelete: 'CASCADE',
      });
      models.DataFiles.belongsTo(models.DataQuality, {
        foreignKey: 'data_quality_id',
        as: "DataQualityRef",
        type: DataTypes.BIGINT,
        onDelete: 'CASCADE',
      });
      models.DataFiles.belongsTo(models.Users, {
        foreignKey: 'uploader_id',
        as: "AuthorRef",
        type: DataTypes.BIGINT,
        onDelete: 'CASCADE',
      });
      models.DataFiles.hasMany(models.MetaData,{
        foreignKey: 'data_file_id',
        as: "MetaDataRef",
        type: DataTypes.BIGINT,
        onDelete: 'CASCADE',
      });
    }
  }
  DataFiles.init({
    source_media_name: DataTypes.STRING,
    source_name: DataTypes.STRING,
    source_link: DataTypes.TEXT,
    contact: DataTypes.TEXT,
    duration_seconds: DataTypes.TEXT,
    isprocessed: DataTypes.BOOLEAN,
    initial_region_id: DataTypes.BIGINT,
    video_type_id: DataTypes.BIGINT,
    data_quality_id: DataTypes.BIGINT,
    uploader_id: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'DataFiles',
  });
  return DataFiles;
};

export default initDataFiles(DBConnection, DataTypes);