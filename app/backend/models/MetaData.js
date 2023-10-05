const { UUIDV4 } = require("sequelize");
import { DataTypes } from "sequelize";

const MetaData = (sequelize) => {
    const MetaData = sequelize.define("MetaData", {
        metadata_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: UUIDV4,
        },
        num_of_speaker: {
            type: DataTypes.INTEGER,
        },
        num_of_male_speaker: {
            type: DataTypes.INTEGER,
        },
        num_of_female_speaker: {
            type: DataTypes.INTEGER,
        },
    });
    MetaData.associate = (models) => {
        models.MetaData.hasOne(models.User);
        models.MetaData.hasOne(models.DataFile);
    };
    return MetaData;
};

export default MetaData;
