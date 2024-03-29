
var express = require('express');
var router = express.Router();
var ctrlLocations=require('../controllers/locations');
var ctrlOthers=require('../controllers/others');
router.get('/',ctrlLocations.home);
router.get('/book1',ctrlLocations.book1);
router.get('/book2',ctrlLocations.book2);
router.get('/book3',ctrlLocations.book3);
router.get('/about',ctrlOthers.about);

module.exports = router;