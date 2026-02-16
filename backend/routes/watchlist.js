const express = require('express');
const router = express.Router();
const { getMyList, addToList, removeFromList } = require('../controllers/watchlistController');
const { protect } = require('../middleware/auth');
router.get('/', protect, getMyList);
router.post('/:movieId', protect, addToList);
router.delete('/:movieId', protect, removeFromList);
module.exports = router;
