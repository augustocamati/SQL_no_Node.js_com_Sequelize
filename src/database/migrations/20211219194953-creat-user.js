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
     created_at:{
       type: Sequelize.DATE,
       allawNull: false
     },
     updated_at:{
       type: Sequelize.DATE,
       allawNull: false
     }
     });
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.dropTable('users');
     
  }
};
