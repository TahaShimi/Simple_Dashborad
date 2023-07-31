import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarComponent } from './project_layouts/side-bar/side-bar.component';
import {
  DxButtonModule,
  DxDrawerComponent, DxDrawerModule, DxListModule, DxToolbarModule,
} from 'devextreme-angular';
import { TopBarComponent } from './project_layouts/top-bar/top-bar.component';
import { SocialModule } from './social/social.module';
import { AccountModule } from './account/account.module';
import { CorporateModule } from './corporate/corporate.module';
import { SettingModule } from './setting/setting.module';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TopBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DxDrawerModule,
    DxListModule,
    DxToolbarModule,
    DxButtonModule,
    SocialModule,
    AccountModule,
    CorporateModule,
    SettingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
