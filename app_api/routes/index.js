var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');

router.get('/locations', ctrlLocations.booksList);
router.post('/locations', ctrlLocations.booksCreate);
router.get('/locations/:locationid', ctrlLocations.booksReadOne);
router.put('/locations/:locationid', ctrlLocations.booksUpdateOne);
router.delete('/locations/:locationid', ctrlLocations.booksDeleteOne);
// reviews
module.exports = router;