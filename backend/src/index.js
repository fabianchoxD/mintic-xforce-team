const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const mongoose = require('./database/Connection');
const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter');
const authRouter = require('./routes/authenticationRouter');
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);

app.listen(3001, () => {
    console.log("Server ON")
});