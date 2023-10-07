import { Model, DataTypes } from 'sequelize';
import DBConnection from '../connection';

const initProcessedData =  (sequelize, DataTypes) => {
  class ProcessedData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.ProcessedData.belongsTo(models.Users, { foreignKey: 'annotator_id', as: 'AnnotatorRef', type: DataTypes.BIGINT });
      models.ProcessedData.belongsTo(models.Users, { foreignKey: 'verifier_id', as: 'VerifierRef', type: DataTypes.BIGINT });
      models.ProcessedData.belongsTo(models.DataFiles, { foreignKey: 'data_file_id', as: 'DataFileRef', type: DataTypes.BIGINT });
      models.ProcessedData.belongsTo(models.AgeGroups, { foreignKey: 'age_group_id', as: 'AgeGroupRef', type: DataTypes.BIGINT })
      models.ProcessedData.belongsTo(models.Regions, { foreignKey: 'region_id', as: 'RegionRef', type: DataTypes.BIGINT })
      models.ProcessedData.belongsTo(models.Emotions, { foreignKey: 'emotion_id', as: 'EmotionRef', type: DataTypes.BIGINT })
      models.ProcessedData.belongsTo(models.DataQuality, { foreignKey: 'data_quality_id', as: 'DataQualityRef', type: DataTypes.BIGINT })
      models.ProcessedData.belongsTo(models.VideoTypes, { foreignKey: 'video_type_id', as: 'VideoTypeRef', type: DataTypes.BIGINT })
  
    }
  }
  ProcessedData.init({
    regional_text: DataTypes.TEXT,
    formal_text: DataTypes.TEXT,
    start_time: DataTypes.STRING,
    end_time: DataTypes.STRING,
    annotator_id:DataTypes.BIGINT,
    varifier_id:DataTypes.BIGINT,
    data_file_id:DataTypes.BIGINT,
    age_group_is:DataTypes.BIGINT,
    region_id:DataTypes.BIGINT,
    emotion_id:DataTypes.BIGINT,
    data_quality_is:DataTypes.BIGINT,
    video_type_id:DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'ProcessedData',
  });
  return ProcessedData;
};

export default initProcessedData(DBConnection, DataTypes);