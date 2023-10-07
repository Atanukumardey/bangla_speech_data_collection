'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProcessedData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      regional_text: {
        type: Sequelize.TEXT
      },
      formal_text: {
        type: Sequelize.TEXT
      },
      start_time: {
        type: Sequelize.STRING
      },
      end_time: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      annotator_id:{
        allowNull:false,
        type:Sequelize.BIGINT,
        references:{
          model: "Users",
          key:"id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      verifier_id:{
        allowNull:true,
        type:Sequelize.BIGINT,
        references:{
          model: "Users",
          key:"id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      data_file_id:{
        allowNull:false,
        type:Sequelize.BIGINT,
        references:{
          model: "DataFiles",
          key:"id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      age_group_id:{
        allowNull:true,
        type:Sequelize.BIGINT,
        references:{
          model: "AgeGroups",
          key:"id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      region_id:{
        allowNull:true,
        type:Sequelize.BIGINT,
        references:{
          model: "Regions",
          key:"id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      emotion_id:{
        allowNull:true,
        type:Sequelize.BIGINT,
        references:{
          model: "Emotions",
          key:"id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      data_quality_id:{
        allowNull:true,
        type:Sequelize.BIGINT,
        references:{
          model: "DataQuality",
          key:"id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      video_type_id:{
        allowNull:true,
        type:Sequelize.BIGINT,
        references:{
          model: "VideoTypes",
          key:"id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('ProcessedData');
  }
};