'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DataFiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },source_media_name: {
        type: Sequelize.STRING
      },
      source_name: {
        type: Sequelize.STRING
      },
      source_link: {
        type: Sequelize.TEXT
      },
      contact: {
        type: Sequelize.TEXT
      },
      duration_seconds: {
        type: Sequelize.TEXT
      },
      isprocessed: {
        type: Sequelize.BOOLEAN
      },
      initial_region_id: {
        allowNull: true,
        type: Sequelize.BIGINT,
        references: {
          model: "Regions",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      video_type_id: {
        allowNull: true,
        type: Sequelize.BIGINT,
        references: {
          model: "VideoTypes",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      data_quality_id: {
        allowNull: true,
        type: Sequelize.BIGINT,
        references: {
          model: "DataQuality",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      uploader_id: {
        allowNull: true,
        type: Sequelize.BIGINT,
        references: {
          model: "Users",
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
    await queryInterface.dropTable('DataFiles');
  }
};