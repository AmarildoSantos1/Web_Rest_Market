const User = require('../models/usuarioModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.SECRET_KEY;

// Função de autenticação
exports.autenticarUsuario = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Primeiro, tente autenticar como funcionário
    const funcionario = await Usuario.findOne({ username, password, papel: 'funcionario' });

    if (funcionario) {
      // Gere um token para funcionário
      const token = jwt.sign({ userId: funcionario._id, papel: 'funcionario' }, 'asdfopasdopfasmdfmsamfasfas', {
        expiresIn: '1h', // Define o tempo de expiração do token
      });
      return res.json({ token });
    }

    // Se não for um funcionário, tente autenticar como cliente
    const cliente = await Usuario.findOne({ username, password, papel: 'cliente' });

    if (cliente) {
      // Gere um token para cliente
      const token = jwt.sign({ userId: cliente._id, papel: 'cliente' }, 'asdfopasdopfasmdfmsamfasfas', {
        expiresIn: '1h', // Define o tempo de expiração do token
      });
      return res.json({ token });
    }

    // Se nenhum dos dois logar, retorne um erro de autenticação
    res.status(401).json({ error: 'Falha na autenticação' });
  } catch (err) {
    res.status(500).json({ error: 'Erro na autenticação' });
  }
};

exports.criarUsuario = async (req, res) => {
  try {
    const { username, password, papel } = req.body;
    if (!username || !password || !papel) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios: username, password, papel' });
    }

    const novoUsuario = new Usuario({
      username,
      password,
      papel
    });

    await novoUsuario.save();
    
    res.status(201).json({message: `O usuário foi criado com sucesso!`})
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar o usuário' });
  }
};

// Função para listar todos os usuários
exports.listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao listar os usuários' });
  }
};

// Função para recuperar um único usuário por ID
exports.obterUsuarioPorId = async (req, res) => {
  const userId = req.params.id;
  try {
    const usuario = await Usuario.findById(userId);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    res.json(usuario);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao recuperar o usuário' });
  }
};

// Função para atualizar um usuário por ID
exports.atualizarUsuario = async (req, res) => {
  const userId = req.params.id;
  try {
    const { username, password, papel } = req.body;
    const usuario = await Usuario.findByIdAndUpdate(userId, { username, password, papel }, { new: true });
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    res.json({ message: 'Usuário atualizado com sucesso!', usuario });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar o usuário' });
  }
};

// Função para excluir um usuário por ID
exports.excluirUsuario = async (req, res) => {
  const userId = req.params.id;
  try {
    const usuario = await Usuario.findByIdAndRemove(userId);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    res.json({ message: 'Usuário excluído com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao excluir o usuário' });
  }
};
