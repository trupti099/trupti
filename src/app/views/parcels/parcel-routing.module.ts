import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParcelListComponent } from './parcel-list/parcel-list.component';
// import { AddParcelComponent } from './add-parcel/add-parcel.component';
// import { AddReceiverComponent } from './add-receiver/add-receiver.component';
// import { AddSenderComponent } from './add-sender/add-sender.component';
import { ManageParcelComponent } from './manage-parcel/manage-parcel.component';
import { ManageComponent } from './manage/manage.component';

const routes: Routes = [
  {
    path: '',
    component: ParcelListComponent
  },
 
  {
    path: 'add-parcel',
    component: ManageParcelComponent
 },
  {
    path: 'manage',
    component: ManageComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParcelsRoutingModule { }
