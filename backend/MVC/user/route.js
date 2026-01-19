const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.post('/add', controller.UserCreate)
router.get('/all', controller.getAllUser)
module.exports = router;

