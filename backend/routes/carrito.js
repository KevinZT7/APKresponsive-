const express = require('express');
const router = express.Router();
const carritoController = require('../controllers/carritoController');

router.post('/add', carritoController.addToCarrito);

module.exports = router;

