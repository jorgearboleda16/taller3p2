var express = require('express');
var router = express.Router();

const { Producto, Pedido, PedidoProducto } = require('../models');

router.get('/', async (req, res) => {
  try {
    const productos = await Producto.findAll({
      attributes: { exclude: ["updatedAt"] },
      include: [{
        model: Pedido,
        through: { model: PedidoProducto, attributes: ['cantidad', 'precio'],}
      }]
    });
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/view', async (req, res) => {
  try {
    const productos = await Producto.findAll({
      attributes: { exclude: ["updatedAt"] },
      include: [{
        model: Pedido,
        through: { model: PedidoProducto, attributes: ['cantidad', 'precio'],}
      }]
    });
    res.render('productos', { productos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
