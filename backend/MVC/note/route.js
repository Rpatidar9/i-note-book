const express = require('express');
const router = express.Router();
const controller = require('../note/controller')

router.post('/add', controller.add)
router.get('/all', controller.getAll)
module.exports = router;

