const Sales = require('../models/Sales');

// CREATE A NEW SALE

createSale = (req, res) => {
    const userDecoded = req.userDecoded;
    if (userDecoded.role !== 'Pending' && userDecoded.state === 'Authorized') {
        Sales.create(req.body).then((data) => {
            res.status(200).json({ message: "Sale Complete!", data });
        }).catch(err => {
            res.send(err);
        })
    } else {
        res.status(401).json({ errorMessage: "Sorry, you don't have permission to make a sale." });
    }
}

// GET ALL SALES

getSales = (req, res) => {
    const userDecoded = req.userDecoded;
    if (userDecoded.role === 'Pending') {
        res.status(401).json({ errorMessage: "Sorry, you don't have access to this resource." });
    } else {
        Sales.find().then((data) => {
            res.status(200).json(data);
        }).catch(err => {
            res.send(err);
        })
    }
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
    const userDecoded = req.userDecoded;
    if (userDecoded.role !== 'Pending' && userDecoded.state === 'Authorized') {
        let { id } = req.params;
        Sales.findByIdAndUpdate(id, req.body).then((data) => {
            res.status(200).json({ message: 'Sale Updated', data });
        }).catch(err => {
            res.send(err);
        })
    } else {
        res.status(401).json({ errorMessage: "Sorry, you don't have permission to update a sale." })
    }
}

// DELETE A SALE

deleteSale = (req, res) => {
    const userDecoded = req.userDecoded;
    if (userDecoded.role !== 'Pending' && userDecoded.state === 'Authorized') {
        let { id } = req.params;
        Sales.findByIdAndDelete(id).then(data => {
            res.status(200).json({ message: 'Sale Deleted', data });
        })
            .catch(err => {
                res.send(err);
            });
    } else {
        res.status(401).json({ errorMessage: "Sorry, you don't have permission to delete a sale." })
    }
}

module.exports = {
    createSale,
    getSales,
    getSaleId,
    updateSale,
    deleteSale
}