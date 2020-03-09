import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosRoutingModule } from './pos-routing.module';
import { PosAccountListComponent } from './pos-account-list/pos-account-list.component';
import { MatProgressSpinnerModule, MatTableModule, MatSortModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material';
import { AddPosComponent } from './add-pos/add-pos.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditPosComponent } from './edit-pos/edit-pos.component';

@NgModule({
  declarations: [PosAccountListComponent, AddPosComponent, EditPosComponent],
  imports: [
    CommonModule,
    FormsModule,
    PosRoutingModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgbModule,
    MatCardModule
  ]
})
export class PosModule { }
