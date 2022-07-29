import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardUserPageRoutingModule } from './dashboard-user-routing.module';

import { DashboardUserPage } from './dashboard-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardUserPageRoutingModule
  ],
  declarations: [DashboardUserPage]
})
export class DashboardUserPageModule {}
