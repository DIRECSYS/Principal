import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public correo: any;

  
  constructor() {

  }

  ngOnInit(): void {

  }

  login(){

    let correo = this.correo;

    if (correo == "admin"){
        location.href = "/admin-tabs";
      }
      else if ( correo == "user"){
        location.href = "/tabs"
      }
  }
}
