const mongoose = require('mongoose');

const URL = '';

mongoose.connect(URL, {useUrlNewParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Database Connected");
})

module.exports = mongoose;

