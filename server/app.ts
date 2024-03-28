import path from 'path';


import express from "express";

const app = express()
const port = process.env.PORT || 3000;
import ticketRoutes from './modules/tickets/tickets.route';
import { dataSource } from './app-data-source';


app.use(express.json());

dataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

app.use('api/tickets', ticketRoutes);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
