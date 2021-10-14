const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    description: {type: String, required: true },
    price: {type: Number, required: true },
    state: {type: String, required: true }
});

const Products = mongoose.model('Products', productsSchema); 

module.exports = Products;