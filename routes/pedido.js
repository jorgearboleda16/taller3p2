var express = require('express');
var router = express.Router();

const { Pedido, Producto, PedidoProducto } = require('../models');

router.get('/', async (req, res) => {
  try {
    const pedidos = await Pedido.findAll({
      attributes: { exclude: ["updatedAt"] }});
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/view', async (req, res) => {
  try {
    const pedidos = await Pedido.findAll({exclude: ["updatedAt"] });
    res.render('pedidos', { pedidos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;