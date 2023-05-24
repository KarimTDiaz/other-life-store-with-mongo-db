const express = require('express');
const productRoutes = express.Router();
const controller = require('../controllers/products.controllers');

productRoutes.get('/all', controller.allProducts);

productRoutes.get('/:id', controller.getSingleProduct);

productRoutes.post('/new-product/:id', controller.createProduct);

module.exports = productRoutes;
