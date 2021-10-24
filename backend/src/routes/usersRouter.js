var express = require('express');
var usersRouter = express.Router();
const ctrlUsers = require('../controllers/ctrlUsers');
const tokenMiddleware = require('../middlewares/tokenMiddleware');

// USERS ROUTES
usersRouter.use(tokenMiddleware.verifyToken);
usersRouter.post('/', ctrlUsers.createUser);
usersRouter.get('/', ctrlUsers.getUsers);
usersRouter.get('/afterLogin', ctrlUsers.getRoleAfterLogin);
usersRouter.get('/:id',ctrlUsers.getUserId);
usersRouter.put('/:id', ctrlUsers.updateUser);
usersRouter.delete('/:id', ctrlUsers.deleteUser);

module.exports = usersRouter;