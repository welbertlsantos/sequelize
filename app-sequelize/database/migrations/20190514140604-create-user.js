'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    
    return queryInterface.createTable('users', {
      iduser: {
        allowNull: false,
        autoIncrement: true,
        primaryKey : true,
        type: DataTypes.INTEGER,
      },
      login : {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('users');
  }
};
