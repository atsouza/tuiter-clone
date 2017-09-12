// const express = require('express');
// const Router = express.Router;

const { Router } = require('express');
const UsersController = require('./user/UsersController');

const router = Router();

router.use('/users', UsersController.getRoutes());



module.exports = router;
