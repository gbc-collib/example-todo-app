import { Ticket } from '../../entity/ticket.entity';
import { dataSource } from '../../app-data-source';
import { Request, Response, Next } from 'express';
export class TicketController {
    public static async createTicket(req: Request, res: Response) {
        let db = dataSource.getRepository(Ticket);
        let requestData = req.body;
        let ticket = new Ticket();
        ticket.tags = requestData.tags;
        ticket.user = requestData.user;
        ticket.title = requestData.title;
        ticket.status = requestData.status;
        ticket.dueDate = requestData.dueDate;
        ticket.description = requestData.description;
        let response = await ticket.save();
        res.json(response);
    }

    public static async getAll(req: Request, res: Response) {
        let db = dataSource.getRepository(Ticket);
        const tickets = await db.find()
        console.log(tickets);
        res.json(tickets);
    }

    public static async getOne(req: Request, res: Response) {
        let id = req.params.id;
        let db = dataSource.getRepository(Ticket);
        let ticket = db.findByIds([id as string]);
        res.json(ticket);
    }

    public static async getTicketByTag(req: Request, res: Response) {
        let tag = req.params.tag;
        let db = dataSource.getRepository(Ticket);
        let dbResponse = await db.createQueryBuilder('ticket')
            .where('ticket.tags @> ARRAY[:...tags]', { tags: tag }).execute();
        res.json(dbResponse);
    }


}
