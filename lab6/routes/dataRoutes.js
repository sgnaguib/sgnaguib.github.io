const express = require('express');

const router = express.Router();

const peopleController = require('../controllers/artistController');

router.post('/add', peopleController.peopleAdd);

module.exports = router;