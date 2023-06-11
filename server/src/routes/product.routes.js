const express = require('express');
const productRoutes = express.Router();
const controller = require('../controllers/products.controllers');

productRoutes.get('/all', controller.allProducts);

productRoutes.get('/:id', controller.getSingleProduct);

productRoutes.get('/my-products/:id', controller.getMyProducts);

productRoutes.get('/my-favorites/:id', controller.getMyFavorites);

productRoutes.get('/my-cart/:id', controller.getMyCart);

productRoutes.post('/new-product/:id', controller.createProduct);

productRoutes.delete('/delete-product/:id', controller.deleteProduct);

productRoutes.delete('/purchase-product/:id', controller.purchaseProduct);

module.exports = productRoutes;
