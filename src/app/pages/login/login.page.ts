import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  name : string

  constructor() { }

  ngOnInit() {
  }

  login(){

    let a = this.name;
     
    if (a == "admin"){
        location.href = "/admin-tabs";
      }
      else if ( a == "user"){
        location.href = "/tabs"
      }
  }
}
