const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  type: String,
});

module.exports = mongoose.model('Produto', produtoSchema);
