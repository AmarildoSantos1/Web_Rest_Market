const mongoose = require('mongoose');

const promocaoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  productType: { type: String, required: true }, // Tipo de produto associado à promoção
  discountPercentage: { type: Number, required: true }, // Porcentagem de desconto da promoção
});

module.exports = mongoose.model('Promocao', promocaoSchema);