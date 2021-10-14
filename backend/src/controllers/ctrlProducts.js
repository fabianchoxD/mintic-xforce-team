const Products = require('../models/Products');

// CREATE A NEW PRODUCT

createProduct = (req, res) => {
    Products.create(req.body).then((data) => {
        res.status(200).json({message: "Product Created", data});
    }).catch(err => {
        res.send(err);
    })
}

// GET ALL PRODUCTS

getProducts = (req, res) => {
    Products.find().then((data) => {
        res.status(200).json(data);
    }).catch(err => {
        res.send(err);
    })
}

// GET PRODUCT BY ID

getProductId = (req, res) => {
    let {id} = req.params;
    Products.findById(id).then((data) => {
        res.status(200).json(data);
    }).catch(err => {
        res.send(err);
    })
}

// UPDATE A PRODUCT 

updateProduct = (req, res) => {
    let {id} = req.params;
    Products.findByIdAndUpdate(id, req.body).then((data) => {
        res.status(200).json({message: 'Product Updated', data});
    }).catch(err => {
        res.send(err);
    })
} 

// DELETE A PRODUCT

deleteProduct = (req, res) => {
    let {id} = req.params;
    Products.findByIdAndDelete(id).then(data => {
        res.status(200).json({message: 'Product Deleted', data});
    })
    .catch(err => {
        res.send(err);
    });
}

module.exports = {
    createProduct,
    getProducts,
    getProductId,
    updateProduct,
    deleteProduct
}
