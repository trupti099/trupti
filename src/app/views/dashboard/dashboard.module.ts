import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboadDefaultComponent } from './dashboad-default/dashboad-default.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecentRegisteredPosComponent } from './manage/recent-registered-pos/recent-registered-pos.component';
import { MatProgressSpinnerModule, MatTableModule, MatSortModule } from '@angular/material';
import { RecentRaisedTicketsComponent } from './manage/recent-raised-tickets/recent-raised-tickets.component';
import { RecentCustomersComponent } from './manage/recent-customers/recent-customers.component';
import { RecentParcelsComponent } from './manage/recent-parcels/recent-parcels.component';
import { DashboardSuperAdminComponent } from './dashboard-super-admin/dashboard-super-admin.component';
import { RecentRegisteredPspComponent } from './manage/recent-registered-psp/recent-registered-psp.component';
import { DashboardPspComponent } from './dashboard-psp/dashboard-psp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardPosComponent } from './dashboard-pos/dashboard-pos.component';
@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule,
    NgxEchartsModule,
    NgxDatatableModule,
    NgbModule,
    DashboardRoutingModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
  ],
  declarations: [DashboadDefaultComponent,
    RecentRegisteredPosComponent,
    RecentRaisedTicketsComponent,
    RecentCustomersComponent,
    RecentParcelsComponent,
    DashboardSuperAdminComponent,
    RecentRegisteredPspComponent,
    DashboardPspComponent,
    DashboardComponent,
    DashboardPosComponent,
  ]
})
export class DashboardModule { }
