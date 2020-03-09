import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ParcelListComponent } from './parcel-list/parcel-list.component';
import { ParcelsRoutingModule } from './parcel-routing.module';
import { MatFormFieldModule, MatTableModule, MatPaginatorModule, MatInputModule, 
  MatSortModule, MatStepperModule, MatIconModule 
,

} from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormWizardModule } from 'src/app/shared/components/form-wizard/form-wizard.module';
import { ManageParcelComponent } from './manage-parcel/manage-parcel.component';
import { ManageComponent } from './manage/manage.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxDatatableModule,
    NgbModule,
    ParcelsRoutingModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    FormWizardModule,
    MatIconModule,
    MatStepperModule,

  ],
  declarations: [ 
     ParcelListComponent,
     ManageParcelComponent,
     ManageComponent,
    ]
})
export class ParcelModule { }
