import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminTabsPage } from './admin-tabs.page';

const routes: Routes = [
  {
    path: 'admin-tabs',
    component: AdminTabsPage,
    children: [
      {
        path: 'admin-reports',
        loadChildren : () => import("src/app/pages/admin-reports/admin-reports.module").then(m=> m.AdminReportsPageModule)
      },
      {
        path: 'admin',
        loadChildren : () => import("src/app/pages/admin/admin.module").then(m=> m.AdminPageModule)
      },
      {
        path: 'admin-users',
        loadChildren : () => import("src/app/pages/admin-users/admin-users.module").then(m=> m.AdminUsersPageModule)
      },
      {
        path: '',

        loadChildren : () => import("src/app/pages/admin/admin.module").then(m=> m.AdminPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'src/app/components/admin-tabs',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminTabsPageRoutingModule {}
