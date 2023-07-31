import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorporateRoutingModule } from './corporate-routing.module';
import { CorporateComponent } from './corporate.component';


@NgModule({
  declarations: [
    CorporateComponent
  ],
  imports: [
    CommonModule,
    CorporateRoutingModule
  ]
})
export class CorporateModule { }
