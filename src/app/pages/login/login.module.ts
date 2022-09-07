import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';
import { SplashScreenComponent } from 'src/app/components/splash-screen/splash-screen.component';
import { LoginPage } from './login.page';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LoginPage, SplashScreenComponent]
})
export class LoginPageModule {}
