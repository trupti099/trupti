import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountManagerListComponent } from './account-manager-list/account-manager-list.component';

const routes: Routes = [{
  path:'',
  component:AccountManagerListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountManagerRoutingModule { }
