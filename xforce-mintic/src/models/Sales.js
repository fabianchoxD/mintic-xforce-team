const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({
    total: {type: Number, required: true },
    identification:{type: Number, require:true},
    quantity: {type: Number, required: true },
    description: {type: String, required: true },
    saleDate: {type: String, required: true },
    unitPrice: {type: Number, required: true },
    nameClient: {type: String, required: true },
    state: {type: String, required: true },
});

const Sales = mongoose.model("Sales", salesSchema);

module.exports = Sales;