const { UUIDV4 } = require("sequelize");
import { DataType } from "sequelize";

const SessionInfo = (sequelize) => {
    const SessionInfo = sequelize.define("SessionInfo", {
        session_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: UUIDV4,
        },
        os_type: {
            type: DataTypes.TEXT,
        },
        browser_type: {
            type: DataTypes.TEXT,
        },
    });
    SessionInfo.associate = (models) => {
        models.SessionInfo.hasOne(models.User);
    };
    return SessionInfo;
};

export default SessionInfo;
