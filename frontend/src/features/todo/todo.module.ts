import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { JiraBoardComponent } from './jira-board/jira-board.component';
import { CreateTicketModalComponent } from './create-ticket-modal/create-ticket-modal.component';



@NgModule({
    declarations: [JiraBoardComponent, CreateTicketModalComponent],
    imports: [
        CommonModule,
        AsyncPipe,
    ],
    exports: [
        JiraBoardComponent
    ]
})
export class TodoModule { }