import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboadDefaultComponent } from './dashboad-default/dashboad-default.component';
import { AuthGaurd } from 'src/app/shared/services/auth.gaurd';
import { DashboardSuperAdminComponent } from './dashboard-super-admin/dashboard-super-admin.component';
import { DashboardPspComponent } from './dashboard-psp/dashboard-psp.component';
import { Role } from 'src/app/shared/models/role.model';
import { DashboardComponent } from './dashboard/dashboard.component';

var route: string;
const routes: Routes = [  
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGaurd],
    data: { roles: [Role.admin,Role.psp,Role.pos] }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {

}
