var express = require('express');
var router = express.Router();

const { Cliente, Pedido } = require('../models');

router.get('/', async (req, res) => {
  try {
    const clientes = await Cliente.findAll({ 
      attributes: { exclude: ["updatedAt"] } });
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/view', async (req, res) => {
  try {
    const clientes = await Cliente.findAll({ 
      attributes: { exclude: ["updatedAt"] } });
      res.render('clientes', { clientes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
