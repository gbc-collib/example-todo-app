const ticketController = {};
const {Ticket} = require('../database.js');

ticketController.createTicket = (req, res) => {
  Ticket.create(req.body).then(result => res.json(result));
}

ticketController.getAll = async (req, res) => {
  return await Ticket.findAll();
}

module.exports = ticketController;
