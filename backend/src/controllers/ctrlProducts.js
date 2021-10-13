const Products = require('./Products');

// CREATE A NEW PRODUCT

createProduct = (product, res) => {
    Products.create(product, (err, data) => {
        if (err) throw err;
        res.status(200).json(data);
    })
}

// GET ALL PRODUCTS

exports.getProducts = (res) => {
    Products.find({}, (err, data) => {
        if (err) throw err;
        res.status(200).json(data);
    })
}

// GET PRODUCT BY ID

exports.getProductId = (id, res) => {
    Products.findById(id, (err, data) => {
        if (err) throw err;
        res.status(200).json(data);
    })
}

// UPDATE A PRODUCT 

exports.updateProduct = (productSelected, res) => {
    let {id, description, price, state} = productSelected;

    Products.updateOne(
        {_id: id},
        {$set: {description: description, price: price, state: state}}
    )
    .then(response => {
        res.json({message: "Product Update successfully"}, response)
    })
    .catch(err => {
        if (err) throw err;
    })

} 

// DELETE PRODUCT

exports.deleteProduct = (id, res) => {
    Products.findByIdAndDelete(id).then(data => {
        res.json(data);
    })
    .catch(err => {
        res.send(err);
    });
}

