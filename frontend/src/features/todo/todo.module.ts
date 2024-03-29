import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { JiraBoardComponent } from './jira-board/jira-board.component';
import { CreateTicketModalComponent } from './create-ticket-modal/create-ticket-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
    declarations: [JiraBoardComponent, CreateTicketModalComponent],
    imports: [
        CommonModule,
        AsyncPipe,
        ReactiveFormsModule,
        MatDialogModule,
    ],
    exports: [
        JiraBoardComponent
    ]
})
export class TodoModule { }
