const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const mongoose = require('./database/Connection');
const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter');
app.use('/products', productsRouter);
app.use('/users', usersRouter);

app.listen(3001, () => {
    console.log("Server ON")
});