import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { AccountComponent } from './account/account.component';
import { CustomersReportComponent } from './customers-report/customers-report.component';
import { ParcelsReportComponent } from './parcels-report/parcels-report.component';
import { SupportTicketReportComponent } from './support-ticket-report/support-ticket-report.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSortModule, MatInputModule, MatPaginatorModule, MatTableModule, MatFormFieldModule } from '@angular/material';

@NgModule({
  declarations: [AccountComponent, CustomersReportComponent, ParcelsReportComponent, SupportTicketReportComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    NgbModule,
   
  ]
})
export class ReportsModule { }
