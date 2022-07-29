import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';



const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'history',
        loadChildren : () => import("src/app/pages/history/history.module").then(m=> m.HistoryPageModule)
      },
      {
        path: 'settings',
        loadChildren : () => import("src/app/pages/settings-user/settings-user.module").then(m=> m.SettingsUserPageModule)
      },
      {
        path: 'dashboard',
        loadChildren : () => import("src/app/pages//dashboard-user/dashboard-user.module").then(m=> m.DashboardUserPageModule)
      },
      {
        path: ' ',
        loadChildren : () => import("src/app/pages//dashboard-user/dashboard-user.module").then(m=> m.DashboardUserPageModule)
      }


    ]
  },
  {
    path: ' ',
    redirectTo: 'src/app/components/tabs',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}