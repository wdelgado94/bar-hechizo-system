const express = require('express');

const router = express.Router();

const mesasController = require('../controllers/mesas.controller');

router.get('/', mesasController.obtenerMesas);

module.exports = router;