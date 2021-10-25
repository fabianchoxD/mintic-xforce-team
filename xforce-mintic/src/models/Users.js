const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    name: {type: String, required: true },
    email:{type: String, required: true},
    lastname: {type: String, required: true },
    role: {type: String, default: "Pending"},
    state: {type: String, default: "disabled" }
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;