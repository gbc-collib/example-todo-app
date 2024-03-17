const path = require('path');


let express = require('express');

const app = express()
const port = process.env.PORT||3000;
const ticketRoutes = require('./routes/tickets');


app.use(express.json());

app.use('/tickets', ticketRoutes);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'angular-dist', 'index.html'));
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
