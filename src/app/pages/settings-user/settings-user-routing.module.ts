import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsUserPage } from './settings-user.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsUserPageRoutingModule {}
