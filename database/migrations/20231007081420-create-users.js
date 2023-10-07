/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      user_name: {
        type: Sequelize.STRING
      },
      image_url: {
        type: Sequelize.TEXT
      },
      email: {
        type: Sequelize.TEXT
      },
      password: {
        type: Sequelize.TEXT
      },
      user_role: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      region_id:{
        allowNull:true,
        type:Sequelize.BIGINT,
        references:{
          model:"Regions",
          key:"id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      }
      
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Users');
  }
};