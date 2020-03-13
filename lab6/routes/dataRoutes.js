const express = require('express');

const router = express.Router();

const artistController = require('../controllers/artistController');

router.post('/add', artistController.peopleAdd);

module.exports = router;