'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id:{
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allawNull: false
      },

      name:{
        type: Sequelize.STRING,
        allawNull: false
      },
      email:{
       type: Sequelize.STRING,
       allawNull: false
     },
     createdAt:{
       type: Sequelize.DATE,
       allawNull: false
       
     },
     updatedAt:{
       type: Sequelize.DATE,
       allawNull: false
     }
     });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
