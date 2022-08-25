import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardUserPageRoutingModule } from './dashboard-user-routing.module';

import { DashboardUserPage } from './dashboard-user.page';

import { TestResultCComponent } from 'src/app/components/test-result-c/test-result-c.component';

import { TestComponent } from 'src/app/components/test/test.component';

import { TestLoadingComponent } from 'src/app/components/test-loading/test-loading.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardUserPageRoutingModule
  ],
  declarations: [DashboardUserPage, TestResultCComponent, TestComponent, TestLoadingComponent]
})
export class DashboardUserPageModule {}
