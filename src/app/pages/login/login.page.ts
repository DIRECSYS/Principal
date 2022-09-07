import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public correo: string;
  public password: string;

  
  constructor(private auth: AuthService) {

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

  loginFirebase(){
    let email = this.correo;
    let password = this.password;
    console.log(email, password);
    this.auth.login(email,password);
  }
}
