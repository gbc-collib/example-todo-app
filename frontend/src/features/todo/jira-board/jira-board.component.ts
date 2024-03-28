import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { TicketService, Tickets, Ticket, statusType } from "src/core/ticket-service/ticket.service";
@Component({ templateUrl: './jira-board.component.html' })
export class JiraBoardComponent implements OnInit {
    public loading: boolean = true;
    public ticketArray$!: Observable<Tickets>;
    constructor(private tickets: TicketService) { }

    ngOnInit(): void {
        this.ticketArray$ = this.tickets.getAllTickets();
        /*
           .subscribe({
               'next': (data: Tickets) => {
                   this.ticketArray = data;
                   this.loading = false;
               },
               'error': (error) => {
                   console.log(error);
               }
           });
    */
    }

    addTicket(status: statusType): void {
        console.log("Adding new " + status);
    }


}
