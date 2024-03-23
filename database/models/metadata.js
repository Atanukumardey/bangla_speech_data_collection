import { Model, DataTypes } from 'sequelize';
import DBConnection from '../connection';

const initMetaData = (sequelize, DataTypes) => {
  class MetaData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.MetaData.belongsTo(models.Users, {
        foreignKey: 'provider_id',
        as:"ProviderRef",
        type: DataTypes.BIGINT,
      });
      models.MetaData.belongsTo(models.DataFiles, {
        foreignKey: 'data_file_id',
        as: "mDataFileRef",
        type: DataTypes.BIGINT,
      });
    }
  }
  MetaData.init({
    num_of_speaker: DataTypes.INTEGER,
    num_of_male_speaker: DataTypes.INTEGER,
    num_of_female_speaker: DataTypes.INTEGER,
    provider_id: DataTypes.BIGINT,
    data_file_id: DataTypes.BIGINT,
  }, {
    sequelize,
    modelName: 'MetaData',
  });
  return MetaData;
};

export default initMetaData(DBConnection, DataTypes);