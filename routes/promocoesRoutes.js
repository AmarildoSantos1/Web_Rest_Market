const express = require('express');
const router = express.Router();
const promocoesController = require('../controllers/promocoesController');

// Rota para recuperar promoções com base nas preferências do usuário
router.get('/get-promotions-by-user/:userId', promocoesController.obterPromocoesPorUsuario);

module.exports = router;
