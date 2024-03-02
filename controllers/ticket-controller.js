const ticketController = {};
const { Ticket } = require('../database.js');

ticketController.createTicket = async (req, res) => {
  let response = await Ticket.create(req.body);
  res.json(response);
}

ticketController.getAll = async (req, res) => {
  let tickets = await Ticket.findAll();
  console.log(tickets);
  res.json(tickets);
}

ticketController.getOne = async (req, res) => {
  let id = req.params.id;
  Ticket.findByPK(id)
}

module.exports = ticketController;
