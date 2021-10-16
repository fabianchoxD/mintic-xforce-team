const Users = require('../models/Users');

// CREATE A NEW USER

createUser = (req, res) => {
    Users.create(req.body).then((data) => {
        res.status(200).json({ message: "User Created", data });
    }).catch(err => {
        res.send(err);
    })
}

// GET ALL USER

getUsers = (req, res) => {
    Users.find().then((data) => {
        res.status(200).json(data);
    }).catch(err => {
        res.send(err);
    })
}

// GET USER BY ID

getUserId = (req, res) => {
    let { id } = req.params;
    Users.findById(id).then((data) => {
        res.status(200).json(data);
    }).catch(err => {
        res.send(err);
    })
}

// UPDATE A USER

updateUser = (req, res) => {
    let { id } = req.params;
    Users.findByIdAndUpdate(id, req.body).then((data) => {
        res.status(200).json({ message: 'User Updated', data });
    }).catch(err => {
        res.send(err);
    })
}

// DELETE A USER

deleteUser = (req, res) => {
    let { id } = req.params;
    Users.findByIdAndDelete(id).then(data => {
        res.status(200).json({ message: 'User Deleted', data });
    })
        .catch(err => {
            res.send(err);
        });
}

module.exports = {
    createUser,
    getUsers,
    getUserId,
    updateUser,
    deleteUser
}