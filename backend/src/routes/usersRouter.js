var express = require('express');
var usersRouter = express.Router();
const ctrlUsers = require('../controllers/ctrlUsers');

// USERS ROUTES
usersRouter.post('/users', ctrlUsers.createUser);
usersRouter.get('/users', ctrlUsers.getUsers);
usersRouter.get('/users/:id',ctrlUsers.getUserId);
usersRouter.put('/users/:id', ctrlUsers.updateUser);
usersRouter.delete('/users/:id', ctrlUsers.deleteUser);

module.exports = usersRouter;