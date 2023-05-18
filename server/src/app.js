const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routes');

// Para leer variables de entorno
require('dotenv').config();

// esto irá en el env
PORT = '3000';
MONGODB_URL =
  'mongodb+srv://karimtilouni94:pLvbbw6JZkVlpXV2@server.8zskb9c.mongodb.net/other-life-store';

// Rutas

// Middlewares para cliente
app.use(cors());
app.use(express.json());

// Uso de rutas
app.use('/other-life-store', userRoutes);

// Funcion para inicializar el servidor conectando a la db

const startServer = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log('Connected to database');
  } catch (err) {
    console.error('Connection error');
  }
  app.listen(PORT, console.log(`Server listen on port ${PORT}`));
};

startServer();
