const { UUIDV4 } = require("sequelize");
import { DataTypes } from "sequelize";

const DataFile = (sequelize) => {
    const DataFile = sequelize.define("DataFile", {
        data_file_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: UUIDV4,
        },
        source_media_name: {
            type: DataTypes.INTEGER,
        },
        source_name: {
            type: DataTypes.INTEGER,
        },
        source_link:{
            type: DataTypes.TEXT
        },
        contact:{
            type: DataTypes.TEXT
        },
        duration_seconds:{
            type: DataTypes.STRING
        },
        is_processed:{
            type:DataTypes.BOOLEAN
        },
    });
    DataFile.associate = (models) => {
        models.DataFile.hasOne(models.Region);
    };
    return DataFile;
};

export default DataFile;
