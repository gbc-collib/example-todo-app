const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticket-controller');

router.route('/')
  .post(async (req, res) => {
    try {
      await ticketController.createTicket(req, res);
    } catch (error) {
      console.error('Error creating ticket:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  })
  .get(async (req, res) => {
    try {
      await ticketController.getAll(req, res);
    } catch (error) {
      console.error('Error fetching tickets:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = router;

