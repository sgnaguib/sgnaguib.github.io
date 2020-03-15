const express = require('express');

const router = express.Router();

const artistController = require('../controllers/artistController');
const loginController = require('../controllers/loginController');

router.post('/add', artistController.peopleAdd);
router.post('/delete/:id', artistController.removeArtist);
router.post('/search', artistController.searchArtists);
router.post('/login', loginController.checkUser);
router.get('/view', artistController.showAll)

module.exports = router;