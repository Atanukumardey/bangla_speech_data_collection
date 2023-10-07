import { Model, DataTypes } from 'sequelize';
import DBConnection from '../connection';

const initEmotions =  (sequelize, DataTypes) => {
  class Emotions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Emotions.hasMany(models.ProcessedData);
    }
  }
  Emotions.init({
    emotion_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Emotions',
  });
  return Emotions;
};

export default initEmotions(DBConnection, DataTypes);