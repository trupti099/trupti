import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PspListComponent } from './psp-list/psp-list.component';
import { AddPspComponent } from './add-psp/add-psp.component';
import {EditPspComponent } from './edit-psp/edit-psp.component';
import { AuthGaurd } from 'src/app/shared/services/auth.gaurd';
import { Role } from 'src/app/shared/models/role.model';

const routes: Routes = [
  {
    path: '',
    component: PspListComponent,
    canActivate: [AuthGaurd],
    data: { roles: [Role.admin] }
  },
  {
    path: 'add-psp',
    component: AddPspComponent,
    canActivate: [AuthGaurd],
    data: { roles: [Role.admin] }
  },
  {
    path: 'edit-psp/:id',
    component: EditPspComponent,
    canActivate: [AuthGaurd],
    data: { roles: [Role.admin] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PspRoutingModule { }
