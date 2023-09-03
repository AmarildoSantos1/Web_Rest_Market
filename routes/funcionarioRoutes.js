const express = require('express');
const router = express.Router();
const funcionarioController = require('../controllers/funcionarioController');

// Rota para criar um novo funcionário
router.post('/', funcionarioController.criarFuncionario);

// Rota para listar todos os funcionários
router.get('/', funcionarioController.listarTodosFuncionarios);

// Rota para recuperar um funcionário por ID
router.get('/:id', funcionarioController.obterFuncionarioPorId);

// Rota para atualizar um funcionário por ID
router.put('/:id', funcionarioController.atualizarFuncionario);

// Rota para excluir um funcionário por ID
router.delete('/:id', funcionarioController.excluirFuncionario);

module.exports = router;