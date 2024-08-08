'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pedidos', [{
      clienteId: 1,
      fecha: new Date(),
      estado: 'pendiente',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      clienteId: 1,
      fecha: new Date(),
      estado: 'completado',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      clienteId: 2,
      fecha: new Date(),
      estado: 'pendiente',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pedidos', null, {});
  }
};
