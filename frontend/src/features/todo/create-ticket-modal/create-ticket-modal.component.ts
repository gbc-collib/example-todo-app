import { Component } from '@angular/core';

@Component({
    selector: 'app-create-ticket-modal',
    templateUrl: './create-ticket-modal.component.html',
    styleUrls: ['./create-ticket-modal.component.scss']
})
export class CreateTicketModalComponent {
    public submitted: boolean = false;
    public loading: boolean = false;;

    public submitForm() {
    }

}
