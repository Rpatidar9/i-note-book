const express = require('express');
const router = express.Router();
const controller = require('../MVC/user.controller')

router.post('user/add', controller.UserCreate)

module.exports = router;

