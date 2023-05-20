const express = require('express');
const userRoutes = express.Router();
const controller = require('../controllers/users.controllers');

// OBTENER TODOS LOS USUARIOS
userRoutes.get('/users', controller.allUsers);

userRoutes.get('/users/:id', controller.getSingleUser);

userRoutes.post('/new-user', controller.createUser);

module.exports = userRoutes;
