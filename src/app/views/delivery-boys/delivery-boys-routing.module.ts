import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryBoysListComponent } from './delivery-boys-list/delivery-boys-list.component';
import { AddDeliveryboyComponent } from './add-deliveryboy/add-deliveryboy.component';

const routes: Routes = [
  {
    path: '',
    component: DeliveryBoysListComponent
  },
  {
    path: 'add-delivery-boy',
    component: AddDeliveryboyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryBoysRoutingModule { }
