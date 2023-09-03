const Promocao = require('../models/promocoesModel');
const Usuario = require('../models/usuarioModel');

// Função para recuperar promoções com base nas preferências do usuário
exports.obterPromocoesPorUsuario = async (req, res) => {
  const userId = req.params.userId;

  try {
    // Encontre as preferências de compra do usuário pelo ID
    const usuario = await Usuario.findById(userId);

    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    // Recupere as promoções que correspondam aos tipos de produtos favoritos do usuário
    const promocoes = await Promocao.find({ tipoProduto: { $in: usuario.tiposProdutosFavoritos } });

    res.json(promocoes);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao recuperar promoções' });
  }
};