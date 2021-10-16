const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    name: {type: String, required: true },
    lastname: {type: String, required: true },
    role: {type: String },
    state: {type: String, required: true }
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;