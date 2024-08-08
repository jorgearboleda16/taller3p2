'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PedidoProductos', [{
      productoId: 1,
      pedidoId: 1,
      cantidad: 2,
      precio: 10.0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      productoId: 2,
      pedidoId: 1,
      cantidad: 1,
      precio: 20.0,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PedidoProductos', null, {});
  }
};
