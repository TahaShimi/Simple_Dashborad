import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { DxButtonModule } from 'devextreme-angular';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    DxButtonModule,
    FlexLayoutModule
  ]
})
export class AccountModule { }
