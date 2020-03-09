import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PspRoutingModule } from './psp-routing.module';
import { PspListComponent } from './psp-list/psp-list.component';
import { MatProgressSpinnerModule, MatTableModule, MatSortModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material';
import { AddPspComponent } from './add-psp/add-psp.component';
import { EditPspComponent } from './edit-psp/edit-psp.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [PspListComponent, AddPspComponent, EditPspComponent],
  imports: [
    CommonModule,
    PspRoutingModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot(),
    MatCardModule
    
  ]
})
export class PspModule { }
