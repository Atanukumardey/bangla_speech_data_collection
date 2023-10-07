'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MetaData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      num_of_speaker: {
        type: Sequelize.INTEGER
      },
      num_of_male_speaker: {
        type: Sequelize.INTEGER
      },
      num_of_female_speaker: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      provider_id:{
        allowNull:true,
        type:Sequelize.BIGINT,
        references:{
          model:"Users",
          key:"id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      data_file_id:{
        allowNull:true,
        type:Sequelize.BIGINT,
        references:{
          model:"DataFiles",
          key:"id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('MetaData');
  }
};