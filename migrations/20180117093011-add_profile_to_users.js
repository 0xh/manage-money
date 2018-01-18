'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return [
      queryInterface.addColumn('users', 'name', { type: Sequelize.STRING }),
      queryInterface.addColumn('users', 'picture', { type: Sequelize.STRING }),
    ]
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

    return [
      queryInterface.removeColumn('users', 'name'),
      queryInterface.removeColumn('users', 'picture'),
    ]
  },
}
