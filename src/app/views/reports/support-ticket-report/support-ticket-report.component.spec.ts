import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportTicketReportComponent } from './support-ticket-report.component';

describe('SupportTicketReportComponent', () => {
  let component: SupportTicketReportComponent;
  let fixture: ComponentFixture<SupportTicketReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportTicketReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportTicketReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
