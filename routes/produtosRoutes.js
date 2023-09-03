const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

// Rota para criar um novo produto
router.post('/', produtoController.criarProduto);

// Rota para listar todos os produtos
router.get('/', produtoController.listarTodosProdutos);

// Rota para recuperar um produto por ID
router.get('/:id', produtoController.obterProdutoPorId);

// Rota para atualizar um produto por ID
router.put('/:id', produtoController.atualizarProduto);

// Rota para excluir um produto por ID
router.delete('/:id', produtoController.excluirProduto);

// Rota para atualizar em lote com base no tipo de produto
router.put('/update-by-type/:type', produtoController.atualizarProdutosPorTipo);

module.exports = router;
