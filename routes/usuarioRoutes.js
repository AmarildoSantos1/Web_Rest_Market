const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Rota para autenticação de usuário
router.post('/autenticar', usuarioController.autenticarUsuario);

// Rota para criar um novo usuário
router.post('/', usuarioController.criarUsuario);

// Rota para listar todos os usuários
router.get('/', usuarioController.listarUsuarios);

// Rota para recuperar um usuário por ID
router.get('/:id', usuarioController.obterUsuarioPorId);

// Rota para atualizar um usuário por ID
router.put('/:id', usuarioController.atualizarUsuario);

// Rota para excluir um usuário por ID
router.delete('/:id', usuarioController.excluirUsuario);

module.exports = router;
