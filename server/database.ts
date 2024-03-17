const { Sequelize } = require('sequelize');// Example for sqlite
const TicketModel = require('./models/ticket');
const sequelize = new Sequelize('sqlite::memory:')
const models = [
  // Add here all of your models
  require('./models/ticket'),
].map(m => m(sequelize));
sequelize.sync()
  .then(console.log('DB is synced'));


const Ticket = TicketModel(sequelize, Sequelize);
module.exports = {Ticket};
