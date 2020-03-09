import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ParcelsReportComponent } from './parcels-report/parcels-report.component';
import { CustomersReportComponent } from './customers-report/customers-report.component';
import { SupportTicketReportComponent } from './support-ticket-report/support-ticket-report.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'parcels-report',
    pathMatch: 'full',

  },
  {
    path: 'parcels-report',
    component: ParcelsReportComponent
  },
  {
    path: 'accounts-report',
    component: AccountComponent
  },
  {
    path: 'customers-report',
    component: CustomersReportComponent
  },
  {
    path: 'support-ticket-report',
    component: SupportTicketReportComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
