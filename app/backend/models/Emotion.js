const { UUIDV4 } = require("sequelize");
import { DataTypes } from "sequelize";

const Emotion = (sequelize) => {
    const Emotion = sequelize.define("Emotion", {
        emotion_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: UUIDV4,
        },
        emotion: {
            type: DataTypes.STRING,
        },
    });
    return Emotion;
};

export default Emotion;


