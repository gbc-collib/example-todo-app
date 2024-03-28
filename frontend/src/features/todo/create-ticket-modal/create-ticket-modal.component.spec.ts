import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTicketModelComponent } from './create-ticket-modal.component';

describe('CreateTicketModelComponent', () => {
  let component: CreateTicketModelComponent;
  let fixture: ComponentFixture<CreateTicketModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTicketModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTicketModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
