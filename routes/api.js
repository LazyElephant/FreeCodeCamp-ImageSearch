var express = require('express');
var router = express.Router();
var apiCtrl = require('../controllers/ApiController');

router.get('/latest/imagesearch', apiCtrl.Latest);
router.get('/imagesearch/:term', apiCtrl.Search);

module.exports = router;
