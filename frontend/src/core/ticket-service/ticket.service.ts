import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



export type statusType = "Open" | "In Progress" | "Resolved";


export interface Ticket {
    id: number;

    title: string;

    description: string;

    status: statusType;

    dueDate: Date;

    createDate: Date;

    user: string;

    tags: string[];

}

//Type for user submitting Ticket, excludes auto generated columns of DB
export interface CreateTicket {
    title: string;
    description: string;
    status: statusType;
    dueDate: Date;
    user: string;
    tags: string[];
}

export type Tickets = Ticket[];

@Injectable({
    providedIn: 'root'
})



export class TicketService {

    constructor(private http: HttpClient) { }

    getAllTickets(): Observable<Tickets> {
        return this.http.get<Tickets>('api/tickets');
    }

    getTicket(id: string): Observable<Ticket> {
        return this.http.get<Ticket>(`api/tickets/${id}`);
    }
    createTicket(ticket: CreateTicket) {
        console.log(ticket);
        return this.http.post('api/tickets/', ticket);
    }

    updateTicket(ticket: Ticket, id: number) {
        return this.http.put(`api/tickets/${id}`, ticket);
    }
}
