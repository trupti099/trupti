import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PosAccountListComponent } from './pos-account-list/pos-account-list.component';
import { AddPosComponent } from './add-pos/add-pos.component';
import { EditPosComponent } from './edit-pos/edit-pos.component';
import { Role } from 'src/app/shared/models/role.model';
import { AuthGaurd } from 'src/app/shared/services/auth.gaurd';
// import { PosListComponent } from './pos-list/pos-list.component';

const routes: Routes = [
  {
    path: '',
    component: PosAccountListComponent,
    canActivate: [AuthGaurd],
    data: { roles: [Role.psp,Role.admin] }
  },
  {
    path: 'add-pos',
    component: AddPosComponent,
    canActivate:[AuthGaurd],
    data:{roles:[Role.psp]}
  },
  {
    path: 'edit-pos/:id',
    component: EditPosComponent,
    canActivate:[AuthGaurd],
    data:{roles:[Role.psp]}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosRoutingModule { }
