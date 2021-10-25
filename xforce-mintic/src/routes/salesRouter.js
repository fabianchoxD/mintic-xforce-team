var express = require('express');
var salesRouter = express.Router();
const ctrlSales = require('../controllers/ctrlSales.js');

// SALES ROUTES
salesRouter.post('/', ctrlSales.createSale);
salesRouter.get('/', ctrlSales.getSales);
salesRouter.get('/:id', ctrlSales.getSaleId);
salesRouter.put('/:id', ctrlSales.updateSale);
salesRouter.delete('/:id', ctrlSales.deleteSale);

module.exports = salesRouter;