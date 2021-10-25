const Products = require('../models/Products');

// CREATE A NEW PRODUCT

createProduct = (req, res) => {
    const userDecoded = req.userDecoded;
    if (userDecoded.user.role !== 'Pending' && userDecoded.user.state === 'Authorized') {
        Products.create(req.body).then((data) => {
            res.status(200).json({ message: "Product Created", data });
        }).catch(err => {
            res.send(err);
        })
    } else {
        res.status(401).json({ errorMessage: "Sorry, you don't have permission to create products." });
    }
}

// GET ALL PRODUCTS

getProducts = (req, res) => {
    const userDecoded = req.userDecoded;
    if (userDecoded.user.role === 'Pending') {
        res.status(401).json({ errorMessage: "Sorry, you don't have access to this resource." });
    } else {
        Products.find().then((data) => {
            res.status(200).json(data);
        }).catch(err => {
            res.send(err);
        })
    }
}

// GET PRODUCT BY ID

getProductId = (req, res) => {
    let { id } = req.params;
    Products.findById(id).then((data) => {
        res.status(200).json(data);
    }).catch(err => {
        res.send(err);
    })
}

// UPDATE A PRODUCT

updateProduct = (req, res) => {
    const userDecoded = req.userDecoded;
    if (userDecoded.user.role !== 'Pending' && userDecoded.user.state === 'Authorized') {
        let { id } = req.params;
        Products.findByIdAndUpdate(id, req.body).then((data) => {
            res.status(200).json({ message: 'Product Updated', data });
        }).catch(err => {
            res.send(err);
        })
    } else {
        res.status(401).json({ errorMessage: "Sorry, you don't have permission to update products." })
    }
}

// DELETE A PRODUCT

deleteProduct = (req, res) => {
    const userDecoded = req.userDecoded;
    if (userDecoded.user.role !== 'Pending' && userDecoded.user.state === 'Authorized') {
        let { id } = req.params;
        Products.findByIdAndDelete(id).then(data => {
            res.status(200).json({ message: 'Product Deleted', data });
        })
            .catch(err => {
                res.send(err);
            });
    } else {
        res.status(401).json({ errorMessage: "Sorry, you don't have permission to delete products." })
    }
}

module.exports = {
    createProduct,
    getProducts,
    getProductId,
    updateProduct,
    deleteProduct
}