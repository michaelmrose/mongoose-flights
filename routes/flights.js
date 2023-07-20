var express = require('express');
var router = express.Router();
var flightsController = require('../controllers/flights')
router.get("/", flightsController.index)
router.post("/", flightsController.create)
router.get("/new", flightsController.new)
router.get("/:id", flightsController.show)
router.post("/:id/destinations/add", flightsController.addDestination)

module.exports = router;
