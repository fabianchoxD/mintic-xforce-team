var express = require('express');
var usersRouter = express.Router();
const ctrlUsers = require('../controllers/ctrlUsers');

// USERS ROUTES
usersRouter.post('/', ctrlUsers.createUser);
usersRouter.get('/', ctrlUsers.getUsers);
usersRouter.get('/:id',ctrlUsers.getUserId);
usersRouter.put('/:id', ctrlUsers.updateUser);
usersRouter.delete('/:id', ctrlUsers.deleteUser);

module.exports = usersRouter;