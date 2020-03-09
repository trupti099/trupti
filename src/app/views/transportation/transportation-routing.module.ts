import { NgModule, TRANSLATIONS } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransportationListComponent } from './transportation-list/transportation-list.component';

const routes: Routes = [
  {
    path: '',
    component: TransportationListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportationRoutingModule { }
