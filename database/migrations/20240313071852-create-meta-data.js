'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MetaData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      provider_id: {
        allowNull: true,
        type: Sequelize.BIGINT,
        references: {
          model: "Users",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      data_file_id: {
        allowNull: true,
        type: Sequelize.BIGINT,
        references: {
          model: "DataFiles",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('MetaData');
  }
};