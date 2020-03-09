import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportationRoutingModule } from './transportation-routing.module';
import { TransportationListComponent } from './transportation-list/transportation-list.component';

@NgModule({
  declarations: [TransportationListComponent],
  imports: [
    CommonModule,
    TransportationRoutingModule
  ]
})
export class TransportationModule { }
