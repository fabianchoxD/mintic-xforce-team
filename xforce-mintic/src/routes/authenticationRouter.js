const express = require('express');
const authController = require('../controllers/ctrlAuthentication')
const authRouter = express.Router();

authRouter.post('/google', authController.googleAuth );
module.exports = authRouter;