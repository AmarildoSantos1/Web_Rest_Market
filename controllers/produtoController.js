const Produto = require('../models/produtoModel');

// Função para criar um novo produto
exports.criarProduto = async (req, res) => {
  try {
    const { nome, preco, descricao, tipo } = req.body;
    const produto = new Produto({ nome, preco, descricao, tipo });
    await produto.save();
    res.status(201).json({ mensagem: 'Produto criado com sucesso!' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao criar o produto' });
  }
};

// Função para listar todos os produtos
exports.listarTodosProdutos = async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.json(produtos);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao listar os produtos' });
  }
};

// Função para recuperar um único produto por ID
exports.obterProdutoPorId = async (req, res) => {
  const produtoId = req.params.id;
  try {
    const produto = await Produto.findById(produtoId);
    if (!produto) {
      return res.status(404).json({ erro: 'Produto não encontrado' });
    }
    res.json(produto);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao recuperar o produto' });
  }
};

// Função para atualizar um produto por ID
exports.atualizarProduto = async (req, res) => {
  const produtoId = req.params.id;
  try {
    const { nome, preco, descricao, tipo } = req.body;
    const produto = await Produto.findByIdAndUpdate(produtoId, { nome, preco, descricao, tipo }, { new: true });
    if (!produto) {
      return res.status(404).json({ erro: 'Produto não encontrado' });
    }
    res.json({ mensagem: 'Produto atualizado com sucesso!', produto });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao atualizar o produto' });
  }
};

// Função para excluir um produto por ID
exports.excluirProduto = async (req, res) => {
  const produtoId = req.params.id;
  try {
    const produto = await Produto.findByIdAndRemove(produtoId);
    if (!produto) {
      return res.status(404).json({ erro: 'Produto não encontrado' });
    }
    res.json({ mensagem: 'Produto excluído com sucesso!' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao excluir o produto' });
  }
};

// Função para atualizar produtos em lote com base no tipo
exports.atualizarProdutosPorTipo = async (req, res) => {
  const { tipo } = req.params;
  const { desconto } = req.body;

  try {
    // Encontre todos os produtos com o tipo especificado
    const produtosAtualizados = await Produto.updateMany(
      { tipo },
      { $set: { desconto } }
    );

    if (produtosAtualizados.nModified === 0) {
      return res.status(404).json({ erro: 'Nenhum produto do tipo especificado encontrado' });
    }

    res.json({ mensagem: 'Produtos atualizados com sucesso!' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao atualizar produtos em lote' });
  }
};
