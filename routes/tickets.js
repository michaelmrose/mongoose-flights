const  express = require('express');
const router = express.Router();
const  ticketsController = require('../controllers/tickets')
router.get("/flights/:id/tickets/", ticketsController.show)
router.get("/flights/:id/tickets/new", ticketsController.new)
router.post("/flights/:id/tickets", ticketsController.create)


module.exports = router;
