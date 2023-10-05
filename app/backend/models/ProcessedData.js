const { UUIDV4 } = require("sequelize");
import { DataTypes } from "sequelize";

const ProcessedData = (sequelize) => {
    const ProcessedData = sequelize.define("ProcessedData", {
        processed_data_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: UUIDV4,
        },
        annotator_id: {
            type: DataTypes.UUIDV4,
        },
        verifier_id: {
            type: DataTypes.UUIDV4,
        },
        data_file_id: {
            type: DataTypes.UUIDV4,
        },
        age_group_id: {
            type: DataTypes.UUIDV4,
        },
        region_id: {
            type: DataTypes.UUIDV4,
        },
        regional_text: {
            type: DataTypes.TEXT,
        },
        formal_text: {
            type: DataTypes.TEXT,
        },
        start_time: {
            type: DataTypes.STRING,
        },
        end_time: {
            type: DataTypes.STRING
        },
        emotion_id: {
            type: DataTypes.UUIDV4,
        },
        data_quality_id: {
            type: DataTypes.UUIDV4
        },
        video_type_id: {
            type: DataTypes.UUIDV4
        }
    });
    ProcessedData.associate = (models) => {
        models.ProcessedData.belongsTo(models.User, { foreignKey: 'annotator_id', as: 'Annotator' });
        models.ProcessedData.belongsTo(models.User, { foreignKey: 'verifier_id', as: 'Verifier' });
        models.ProcessedData.belongsTo(models.DataFile, { foreignKey: 'data_file_id', as: 'DataFileRef' });
        models.ProcessedData.belongsTo(models.AgeGroup, { foreignKey: 'age_group_id', as: 'AgeGroupRef' })
        models.ProcessedData.belongsTo(models.Region, { foreignKey: 'region_id', as: 'RegionRef' })
        models.ProcessedData.belongsTo(models.Emotion, { foreignKey: 'emotion_id', as: 'EmotionRef' })
        models.ProcessedData.belongsTo(models.DataQuality, { foreignKey: 'data_quality_id', as: 'DataQualityRef' })
        models.ProcessedData.belongsTo(models.VideoType, { foreignKey: 'video_type_id', as: 'VideoTypeRef' })
    };

    return ProcessedData;
};

export default ProcessedData;
