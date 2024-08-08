'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pedido.belongsTo(models.Cliente, { foreignKey: 'clienteId' });
      Pedido.belongsToMany(models.Producto, { through: models.PedidoProducto, foreignKey: 'pedidoId' });
    }
  }
  Pedido.init({
    clienteId: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};