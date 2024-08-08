'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clientes', [{
      nombre: 'John',
      apellido: 'Doe',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Jane',
      apellido: 'Smith',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clientes', null, {});
  }
};
