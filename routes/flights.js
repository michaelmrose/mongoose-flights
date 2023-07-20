var express = require('express');
var router = express.Router();
var flightsController = require('../controllers/flights')
router.get("/", flightsController.index)
router.post("/", flightsController.create)
router.get("/new", flightsController.new)

module.exports = router;
