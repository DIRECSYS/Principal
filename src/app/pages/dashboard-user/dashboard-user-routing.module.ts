import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardUserPage } from './dashboard-user.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardUserPageRoutingModule {}
