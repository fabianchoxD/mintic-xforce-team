const Sales = require('../models/Sales')

// CREATE A NEW SALES

createSale = (req, res) => {
    Sales.create(req.body).then((data) => {
        res.status(200).json({ message: "Sales Created", data });
    }).catch(err => {
        res.send(err);
    })
}

// GET ALL SALES

getSales = (req, res) => {
    Sales.find().then((data) => {
        res.status(200).json(data);
    }).catch(err => {
        res.send(err);
    })
}

// GET SALES BY ID

getSaleId = (req, res) => {
    let { id } = req.params;
    Sales.findById(id).then((data) => {
        res.status(200).json(data);
    }).catch(err => {
        res.send(err);
    })
}

// UPDATE A SALES

updateSale = (req, res) => {
    let { id } = req.params;
    Sales.findByIdAndUpdate(id, req.body).then((data) => {
        res.status(200).json({ message: 'Sales Updated', data });
    }).catch(err => {
        res.send(err);
    })
}

// DELETE A SALES

deleteSale = (req, res) => {
    let { id } = req.params;
    Sales.findByIdAndDelete(id).then(data => {
        res.status(200).json({ message: 'Sales Deleted', data });
    })
        .catch(err => {
            res.send(err);
        });
}

module.exports = {
    createSale,
    getSales,
    getSaleId,
    updateSale,
    deleteSale
}