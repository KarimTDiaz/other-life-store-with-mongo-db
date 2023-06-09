const express = require('express');
const userRoutes = express.Router();
const controller = require('../controllers/users.controllers');

// OBTENER TODOS LOS USUARIOS
userRoutes.get('/all', controller.allUsers);

userRoutes.get('/:id', controller.getSingleUser);

userRoutes.post('/new-user', controller.createUser);

userRoutes.patch('/edit-user/:id', controller.updateUser);

userRoutes.patch('/like-product/:id', controller.likeProduct);

userRoutes.patch('/add-to-cart/:id', controller.addToCart);

userRoutes.patch('/new-rating/:id', controller.userRating);

module.exports = userRoutes;
