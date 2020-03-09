import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrmManageComponent } from './crm-manage/crm-manage.component';
import { QueryListComponent } from './query-list/query-list.component';

const routes: Routes = [
  {
    path:'',
    component:QueryListComponent
  },
  {
    path:'manage',
    component:CrmManageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { }
