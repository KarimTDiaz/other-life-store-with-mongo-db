const express = require('express');
const userRoutes = express.Router();
const controller = require('../controllers/users.controllers');

// OBTENER TODOS LOS USUARIOS
userRoutes.get('/all', controller.allUsers);

userRoutes.get('/:id', controller.getSingleUser);

userRoutes.post('/new-user', controller.createUser);

userRoutes.patch('/:id', controller.updateUser);
module.exports = userRoutes;
