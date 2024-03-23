import { Model, DataTypes } from 'sequelize';
import DBConnection from '../connection';

const initSessionInfo =  (sequelize, DataTypes) => {
  class SessionInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.SessionInfo.belongsTo(models.Users, {
        foreignKey: 'user_id',
        as: "sessionUser",
        type: DataTypes.BIGINT,
      });
    }
  }
  SessionInfo.init({
    os_type: DataTypes.STRING,
    browser_type: DataTypes.STRING,
    user_id:DataTypes.BIGINT,
  }, {
    sequelize,
    modelName: 'SessionInfo',
  });
  return SessionInfo;
};

export default initSessionInfo(DBConnection, DataTypes);