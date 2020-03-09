import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';

import { DeliveryBoysRoutingModule } from './delivery-boys-routing.module';
import { DeliveryBoysListComponent } from './delivery-boys-list/delivery-boys-list.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditDeliveryboyComponent } from './edit-deliveryboy/edit-deliveryboy.component';
import { FileDroppa } from 'file-droppa';
import { AddDeliveryboyComponent } from './add-deliveryboy/add-deliveryboy.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxDatatableModule,
    DeliveryBoysRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    FileDroppa
  ],
  declarations: [ DeliveryBoysListComponent, EditDeliveryboyComponent, AddDeliveryboyComponent]
})
export class DeliveryBoysModule { }
