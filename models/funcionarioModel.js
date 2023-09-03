const mongoose = require('mongoose');

const funcionarioSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cpf: { type: String, required: true, unique: true }, // Número de CPF como identificador único
  age: { type: Number, required: true },
});

module.exports = mongoose.model('Funcionario', funcionarioSchema);