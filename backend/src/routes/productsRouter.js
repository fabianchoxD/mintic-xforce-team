var express = require('express');
var productsRouter = express.Router();
const ctrlProducts = require('../controllers/ctrlProducts.js');

// PRODUCTS ROUTES
productsRouter.post('/', ctrlProducts.createProduct);
productsRouter.get('/', ctrlProducts.getProducts);
productsRouter.get('/:id', ctrlProducts.getProductId);
productsRouter.put('/:id', ctrlProducts.updateProduct);
productsRouter.delete('/:id', ctrlProducts.deleteProduct);

module.exports = productsRouter;