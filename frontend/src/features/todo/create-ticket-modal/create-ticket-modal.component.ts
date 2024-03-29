import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TicketService } from 'src/core/ticket-service/ticket.service';

@Component({
    selector: 'app-create-ticket-modal',
    templateUrl: './create-ticket-modal.component.html',
    styleUrls: ['./create-ticket-modal.component.scss']
})
export class CreateTicketModalComponent implements OnInit {
    public submitted: boolean = false;
    public loading: boolean = true;
    public editing: boolean = false;
    public ticketCreation!: FormGroup;

    constructor(private fb: FormBuilder, private ticketService: TicketService, public dialogRef: MatDialogRef<CreateTicketModalComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

    ngOnInit(): void {
        this.ticketCreation = this.fb.group({
            title: ['', Validators.required],
            description: [''],
            dueDate: [new Date(), Validators.required],
            status: ['Open', Validators.required],
            tags: ['']
        });
        if (this.data != null && this.data.ticket) {
            const ticket = this.data.ticket
            this.editing = true;
            this.ticketCreation.get('title').setValue(ticket.title);
            this.ticketCreation.get('description').setValue(ticket.description);
            this.ticketCreation.get('dueDate').setValue(ticket.dueDate);
            this.ticketCreation.get('tags').setValue(ticket.tags);
            this.ticketCreation.get('status').setValue(ticket.status);
        }

        this.loading = false;
    }


    public submitForm() {
        this.submitted = true;
        if (this.ticketCreation.invalid) return;
        let requestData = this.ticketCreation.value
        //For now I'm only user TODO: Actual user pool
        requestData.user = 'Collin';
        console.log(requestData);
        let tagList = requestData.tags.split(',');
        requestData.tags = tagList;
        this.loading = true;
        let req: any;
        if (this.editing)
            req = this.ticketService.createTicket(requestData)
        else
            req = this.ticketService.updateTicket(requestData, this.data.ticket.id);
        req
            .subscribe({
                'next': () => {
                    this.loading = false;
                    this.dialogRef.close();
                    //TODO: Close modal on success
                },
                'error': (err) => {
                    this.loading = false;
                    console.log(err);
                }
            });
    }

}
