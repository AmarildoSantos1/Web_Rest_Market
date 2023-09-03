const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['employee', 'customer'], required: true },

});


const User = mongoose.model('usuario', usuarioSchema)
module.exports = User
