import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardUserPageRoutingModule } from './dashboard-user-routing.module';

import { DashboardUserPage } from './dashboard-user.page';

import { TestResultCComponent } from 'src/app/components/test-result-c/test-result-c.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardUserPageRoutingModule
  ],
  declarations: [DashboardUserPage, TestResultCComponent]
})
export class DashboardUserPageModule {}
