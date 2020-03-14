const express = require('express');

const router = express.Router();

const artistController = require('../controllers/artistController');

router.post('/add', artistController.peopleAdd);
router.post('/delete/:id', artistController.removeArtist);
router.post('/search', artistController.searchArtists)

module.exports = router;