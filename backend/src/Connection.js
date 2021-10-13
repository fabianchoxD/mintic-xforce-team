const mongoose = require('mongoose');

const URL = 'mongodb+srv://dbAdmin:XUyGDe3eYReTncxB@clustexforce.b2hgz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(URL, {useUrlNewParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Database Connected");
})

module.exports = mongoose;

