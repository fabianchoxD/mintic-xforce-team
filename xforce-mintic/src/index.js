const express = require('express');
const cors = require('cors');
if(process.env.NODE_ENV !== 'production'){
    console.log("We're not ready for production yet.");
    require('dotenv').config();
    console.log('process env: ', process.env.PORT);
}
const app = express();
app.use(cors());
app.use(express.json());

const mongoose = require('./database/Connection');
const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter');
const salesRouter = require('./routes/salesRouter');
const authRouter = require('./routes/authenticationRouter');
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/sales', salesRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log("Server ON")
});