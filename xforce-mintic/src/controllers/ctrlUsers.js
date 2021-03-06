const Users = require('../models/Users');

// CREATE A NEW USER

createUser = (req, res) => {
    const userDecoded = req.userDecoded;
    if (userDecoded.user.role === 'Administrator' && userDecoded.state === 'Authorized') {
        Users.create(req.body).then((data) => {
            res.status(200).json({ message: "User Created", data });
        }).catch(err => {
            res.send(err);
        })
    } else {
        res.status(401).json({ errorMessage: "Sorry, you don't have permission to create Users." })
    }
}

// GET ALL USER

getRoleAfterLogin = (req, res) => {
    const userDecoded = req.userDecoded;
    res.status(200).json({ role: userDecoded.role });
}

getUsers = (req, res) => {
    const userDecoded = req.userDecoded;
    if (userDecoded.role === 'Administrator') {
        Users.find().then((data) => {
            res.status(200).json(data);
        }).catch(err => {
            console.log("Error getting Users: ", err);
            res.send(err);
        })
    } else {
        res.status(401).json({ errorMessage: "Sorry, you don't have access to this resource." });
    }
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
    const userDecoded = req.userDecoded;
    if (userDecoded.role === 'Administrator' && userDecoded.state === 'Authorized') {
        Users.findByIdAndUpdate(id, req.body, { new: true }).then((data) => {
            const validateCurrentUser = JSON.stringify(userDecoded._id) === JSON.stringify(data._id);
            res.status(200).json({ message: 'User Updated', data, currentUser: validateCurrentUser });
        }).catch(err => {
            res.send(err);
        })
    } else {
        res.status(401).json({ errorMessage: "Sorry, you don't have permission to modify Users.", });
    }
}

// DELETE A USER

deleteUser = (req, res) => {
    let { id } = req.params;
    const userDecoded = req.userDecoded;
    if (userDecoded.role === 'Administrator' && userDecoded.state === 'Authorized') {
        Users.findByIdAndDelete(id).then(data => {
            const validateCurrentUser = JSON.stringify(userDecoded._id) === JSON.stringify(data._id);
            res.status(200).json({ message: 'User Deleted', data, currentUser: validateCurrentUser });
        }).catch(err => {
            res.send(err);
        });
    } else {
        res.status(401).json({ errorMessage: "Sorry, you don't have permission to delete Users." });
    }
}

module.exports = {
    createUser,
    getUsers,
    getUserId,
    updateUser,
    deleteUser,
    getRoleAfterLogin
}