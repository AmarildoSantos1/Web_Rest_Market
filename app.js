const express = require('express');
const mongoose = require('mongoose');
const app = express();
const authenticate = require('./middleware/autenticacao');

require('dotenv').config();

const secretKey = process.env.SECRET_KEY;

// Conexão com o MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mercadoDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

  
const userRoutes = require('./routes/usuarioRoutes');
app.use('/usuarios', userRoutes);

const productRoutes = require('./routes/produtosRoutes');
app.use('/produtos', productRoutes);

const employeeRoutes = require('./routes/funcionarioRoutes');
app.use('/funcionarios', employeeRoutes);

const promotionRoutes = require('./routes/promocoesRoutes');
app.use('/promocoes', promotionRoutes);

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
