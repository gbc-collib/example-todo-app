import { Ticket } from '../../entity/ticket.entity';
import { dataSource } from '../../app-data-source';
import { Request, Response } from 'express';
export class TicketController {
    public static async createTicket(req: Request, res: Response) {
        let requestData = req.body;
        console.log(requestData);
        let ticket = new Ticket();
        ticket.tags = requestData.tags;
        ticket.user = requestData.user;
        ticket.title = requestData.title;
        ticket.status = requestData.status;
        ticket.dueDate = requestData.dueDate;
        ticket.description = requestData.description;
        try {
            let response = await ticket.save();
            res.json(response);
        }
        catch (err) {
            console.log(err);
            res.status(400).send();
        }
    }

    public static async getAll(req: Request, res: Response) {
        let db = dataSource.getRepository(Ticket);
        const tickets = await db.find();
        console.log(tickets);
        res.json(tickets);
    }

    public static async getOne(req: Request, res: Response) {
        let id = req.params.id;
        let db = dataSource.getRepository(Ticket);

        let ticket = Ticket.findByIds([id as string]);
        res.json(ticket);
    }

    public static async getTicketByTag(req: Request, res: Response) {
        let tag = req.params.tag;
        let db = dataSource.getRepository(Ticket);
        let dbResponse = await db.createQueryBuilder('ticket')
            .where('ticket.tags @> ARRAY[:...tags]', { tags: tag }).execute();
        res.json(dbResponse);
    }

    public static async updateTicket(req: Request, res: Response) {
        let requestData = req.body;
        var id: number;
        try {
            id = parseInt(req.params.id);
        }
        catch (err) {
            res.status(400).send("Bad id");
        }
        let ticket = new Ticket();
        ticket.id = id;
        ticket.tags = requestData.tags;
        ticket.user = requestData.user;
        ticket.title = requestData.title;
        ticket.status = requestData.status;
        ticket.dueDate = requestData.dueDate;
        ticket.description = requestData.description;
        try {
            ticket.save();
            res.status(200).json(ticket);
        }
        catch (error) {
            res.status(500).send("Error updating Ticket");
        }

    }

    public static async deleteTicket(req: Request, res: Response) {
        var id: number;
        try {
            parseInt(req.params.id)
        }
        catch (error) {
            res.status(400).send("Bad ID");
        }
        const results = await dataSource.getRepository(Ticket).delete(id);
        res.status(200).send(results);
    }


}
