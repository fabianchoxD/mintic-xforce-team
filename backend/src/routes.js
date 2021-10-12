const express = require('express');
const app = express();
// const { connection } = require('./Connection');

app.get('/', (req, res) => {
    res.json({message:"Este es el Backend del proyecto"})
});

exports.app = app;