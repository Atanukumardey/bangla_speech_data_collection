import { Model, DataTypes } from 'sequelize';
import DBConnection from '../connection';

const initAgeGroups = (sequelize, DataTypes) => {
  class AgeGroups extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.AgeGroups.hasMany(models.ProcessedData,{
        foreignKey: 'age_group_id',
        as: 'ageGroup',
        onDelete: 'CASCADE',
      })
    }
  }
  AgeGroups.init({
    groupName: DataTypes.STRING,
    groupRange: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AgeGroups',
  });
  return AgeGroups;
};

export default initAgeGroups(DBConnection, DataTypes);