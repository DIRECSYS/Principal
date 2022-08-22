import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminReportsPage } from './admin-reports.page';

const routes: Routes = [
  {
    path: '',
    component: AdminReportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminReportsPageRoutingModule {}
