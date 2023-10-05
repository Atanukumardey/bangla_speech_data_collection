const { UUIDV4 } = require("sequelize");

const RegionModel = (sequelize, DataTypes) => {
    const Region = sequelize.define("Region", {
        region_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: UUIDV4,
        },
        region: {
            type: DataTypes.STRING,
        },
    });
    return Region;
};

export default RegionModel;