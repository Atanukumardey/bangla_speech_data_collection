const { UUIDV4, DataTypes } = require("sequelize");

const User = sequelize.define("User", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
    },
    user_name: {
        type: DataTypes.TEXT,
    },
    image_url: {
        type: DataTypes.TEXT,
    },
    email: {
        type: DataTypes.TEXT,
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    user_role: {
        type: DataTypes.STRING,
        defaultValue: "user",
    },
    designation: {
        type: DataTypes.STRING,
    },
});
User.associate = (models) => {
    models.User.hasMany(models.Post);
    models.User.hasMany(models.Comment);
    models.User.hasMany(models.Reaction);
    models.User.hasMany(models.Sms);
    models.User.hasOne(models.Rate);
    models.User.hasOne(models.Course);
};
