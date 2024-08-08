'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Productos', [{
      descripcion: 'Producto A',
      precio: 10.0,
      stock: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      descripcion: 'Producto B',
      precio: 20.0,
      stock: 200,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Productos', null, {});
  }
};
