const { UUIDV4 } = require("sequelize");

const AgeGroup = (sequelize, DataTypes) => {
    const AgeGroup = sequelize.define("AgeGroup", {
        age_group_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: UUIDV4,
        },
        age_group_name: {
            type: DataTypes.STRING,
        },
        age_range: {
            type: DataTypes.STRING,
        },
    });
    AgeGroup.associate = (models) => {
        models.User.hasMany(models.ProcessedData);
    };
    return AgeGroup;
};

export default AgeGroup;
