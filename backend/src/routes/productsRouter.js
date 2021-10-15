var express = require('express');
var productsRouter = express.Router();
const ctrlProducts = require('../controllers/ctrlProducts.js');

// PRODUCTS ROUTES
productsRouter.post('/products', ctrlProducts.createProduct);
productsRouter.get('/products', ctrlProducts.getProducts);
productsRouter.get('/products/:id', ctrlProducts.getProductId);
productsRouter.put('/products/:id', ctrlProducts.updateProduct);
productsRouter.delete('/products/:id', ctrlProducts.deleteProduct);

module.exports = productsRouter;