const express = require('express');
const router = express.Router();
const pedidosController = require('../controllers/pedidosController');

router.post('/create', pedidosController.createPedido);
router.get('/:userId', pedidosController.getPedidosByUser);

module.exports = router;

