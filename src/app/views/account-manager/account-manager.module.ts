import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountManagerRoutingModule } from './account-manager-routing.module';
import { AccountManagerListComponent } from './account-manager-list/account-manager-list.component';

@NgModule({
  declarations: [AccountManagerListComponent],
  imports: [
    CommonModule,
    AccountManagerRoutingModule
  ]
})
export class AccountManagerModule { }
