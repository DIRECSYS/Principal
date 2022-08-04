import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsUserPageRoutingModule } from './settings-user-routing.module';

import { SettingsUserPage } from './settings-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsUserPageRoutingModule
  ],
  declarations: [SettingsUserPage]
})
export class SettingsUserPageModule {}
