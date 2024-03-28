import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { TicketService } from "./ticket-service/ticket.service";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
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
