const Sales = require('../models/Sales');

// CREATE A NEW SALE

createSale = (req, res) => {
    Sales.create(req.body).then((data) => {
        res.status(200).json({ message: "Sale Made", data });
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

// UPDATE A SALE

updateSale = (req, res) => {
    let { id } = req.params;
    Sales.findByIdAndUpdate(id, req.body).then((data) => {
        res.status(200).json({ message: 'Sale Updated', data });
    }).catch(err => {
        res.send(err);
    })
}

// DELETE A SALE

deleteSale = (req, res) => {
    let { id } = req.params;
    Sales.findByIdAndDelete(id).then(data => {
        res.status(200).json({ message: 'Sale Deleted', data });
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