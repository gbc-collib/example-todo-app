const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');
const ticketController = require('../controllers/ticket-controller');

// Define routes for ticket management

router.route('/')
  .post(ticketController.createTicket)
  .get(ticketController.getAll);

module.exports = router;
