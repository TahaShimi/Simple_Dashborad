import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch: 'full'},
  { path: 'social', loadChildren: () => import('./social/social.module').then(m => m.SocialModule) },
  //{ path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'corporate', loadChildren: () => import('./corporate/corporate.module').then(m => m.CorporateModule) },
  { path: 'setting', loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule) },
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
