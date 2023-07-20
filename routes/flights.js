var express = require('express');
var router = express.Router();
var fligthsController = require('../controllers/flights')
router.get("/", fligthsController.index)

module.exports = router;
