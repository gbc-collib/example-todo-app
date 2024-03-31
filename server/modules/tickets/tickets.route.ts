import express, { Request, Response } from 'express';
const router = express.Router();
import { TicketController } from './ticket-controller';

router.route('/')
    .post(async (req: Request, res: Response) => {
        try {
            await TicketController.createTicket(req, res);
        } catch (error) {
            console.error('Error creating ticket:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    })
    .get(async (req: Request, res: Response) => {
        try {
            await TicketController.getAll(req, res);
        } catch (error) {
            console.error('Error fetching tickets:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
router.route('/:id')
    .put(async (req: Request, res: Response) => {
        try {
            await TicketController.updateTicket(req, res);
        }
        catch (error) {
            res.status(500).json({
                error: 'Internal Server error'
            });
        }
    })
    .delete(async (req: Request, res: Response) => {
        try {
            await TicketController.deleteTicket(req, res);
        }
        catch (error) {
            res.status(500).json(error);
        }
    });
export default router;
