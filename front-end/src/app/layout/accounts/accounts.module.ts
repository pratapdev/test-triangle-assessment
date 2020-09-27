import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './components/accounts/accounts.component';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule, MatTableModule } from '@angular/material';

@NgModule({
  declarations: [AccountsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AccountsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class AccountsModule { }
