const express = require('express');
const userRoutes = express.Router();
const controller = require('../controllers/users.controllers');

// OBTENER TODOS LOS USUARIOS
userRoutes.get('/', controller.allUsers);

userRoutes.get('/:id', controller.getSingleUser);
userRoutes.post('/', controller.createUser);

module.exports = userRoutes;
