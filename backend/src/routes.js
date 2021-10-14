const express = require('express');
const app = express();
const connection = require('./Connection');
app.use(express.json());

const ctrlProducts = require('./controllers/ctrlProducts.js');
const ctrlUsers = require('./controllers/ctrlUsers.js');

app.get('/', (req,res) => {
    res.json({message: 'Hello, welcome to Megasales'})
})


// PRODUCTS ROUTES

app.post('/products', ctrlProducts.createProduct);
app.get('/products', ctrlProducts.getProducts);
app.get('/products/:id', ctrlProducts.getProductId);
app.put('/products/:id', ctrlProducts.updateProduct);
app.delete('/products/:id', ctrlProducts.deleteProduct);

// USERS ROUTES

app.post('/users', ctrlUsers.createUser);
app.get('/users', ctrlUsers.getUsers);
app.get('/users/:id',ctrlUsers.getUserId);
app.put('/users/:id', ctrlUsers.updateUser);
app.delete('/users/:id', ctrlUsers.deleteUser);


module.exports = app;