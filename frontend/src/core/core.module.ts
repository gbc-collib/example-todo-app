import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { TicketService } from "./ticket-service/ticket.service";


@NgModule({
    imports: [
        BrowserModule,
    ],
    providers: [
        TicketService
    ],
    declarations: [
    ],
    exports: [
    ],
})
export class CoreModule { }
