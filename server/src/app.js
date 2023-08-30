// esto irá en el env
PORT_EXPRESS = '3000';
PORT_SOCKET = '4000';
MONGODB_URL =
  'mongodb+srv://karimtilouni94:pLvbbw6JZkVlpXV2@server.8zskb9c.mongodb.net/other-life-store';

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const { Server } = require('socket.io');
const server = require('http').createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
  }
});

const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');

// Middlewares para cliente
app.use(cors());
app.use(express.json());

// Para leer variables de entorno
require('dotenv').config();

// Uso de rutas
app.use('/other-life-store/users', userRoutes);
app.use('/other-life-store/products', productRoutes);

// Configura la conexión a MongoDB
const uri = MONGODB_URL;
const client = new MongoClient(uri);

io.on('connection', socket => {
  console.log('Cliente conectado');

  // Maneja la solicitud de cambio de colección
  socket.on('startCollectionListener', () => {
    // Establece el cambio de flujo (change stream) en la colección
    const collectionUsers = client.db('other-life-store').collection('users');
    const changeStreamUsers = collectionUsers.watch();

    // Escucha los eventos de cambio en el flujo y los emite a través del socket
    changeStreamUsers.on('change', change => {
      socket.emit('collectionUsersChange', change);
    });
  });

  // Maneja la desconexión del cliente
  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

// Funcion para inicializar el servidor conectando a la db
const startServer = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log('Connected to database');
  } catch (err) {
    console.error('Connection error');
  }
  app.listen(
    PORT_EXPRESS,
    console.log(`Server listen on port ${PORT_EXPRESS}`)
  );
  // Maneja la desconexión del cliente
  server.listen(PORT_SOCKET, () => {
    console.log(`Servidor Socket.io escuchando en el puerto ${PORT_SOCKET}`);
  });
};

startServer();
