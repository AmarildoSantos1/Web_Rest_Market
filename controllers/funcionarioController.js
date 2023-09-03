const Funcionario = require('../models/funcionarioModel');

// Função para criar um novo funcionário
exports.criarFuncionario = async (req, res) => {
  try {
    const { nome, cpf, idade } = req.body;
    const funcionario = new Funcionario({ nome, cpf, idade });
    await funcionario.save();
    res.status(201).json({ mensagem: 'Funcionário registrado com sucesso!', funcionario });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao criar o funcionário' });
  }
};

// Função para listar todos os funcionários
exports.listarTodosFuncionarios = async (req, res) => {
  try {
    const funcionarios = await Funcionario.find();
    res.json(funcionarios);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao listar os funcionários' });
  }
};

// Função para recuperar um único funcionário por ID
exports.obterFuncionarioPorId = async (req, res) => {
  const funcionarioId = req.params.id;
  try {
    const funcionario = await Funcionario.findById(funcionarioId);
    if (!funcionario) {
      return res.status(404).json({ erro: 'Funcionário não encontrado' });
    }
    res.json(funcionario);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao recuperar o funcionário' });
  }
};

// Função para atualizar um funcionário por ID
exports.atualizarFuncionario = async (req, res) => {
  const funcionarioId = req.params.id;
  try {
    const { nome, cpf, idade } = req.body;
    const funcionario = await Funcionario.findByIdAndUpdate(
      funcionarioId,
      { nome, cpf, idade },
      { new: true }
    );
    if (!funcionario) {
      return res.status(404).json({ erro: 'Funcionário não encontrado' });
    }
    res.json({ mensagem: 'Funcionário atualizado com sucesso!', funcionario });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao atualizar o funcionário' });
  }
};

// Função para excluir um funcionário por ID
exports.excluirFuncionario = async (req, res) => {
  const funcionarioId = req.params.id;
  try {
    const funcionario = await Funcionario.findByIdAndRemove(funcionarioId);
    if (!funcionario) {
      return res.status(404).json({ erro: 'Funcionário não encontrado' });
    }
    res.json({ mensagem: 'Funcionário excluído com sucesso!' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao excluir o funcionário' });
  }
};
