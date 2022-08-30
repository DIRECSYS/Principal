import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public correo: any;
  public contrasena: any;

  
  constructor(private _auth: AuthService, private _router:Router) {

  }

  ngOnInit(): void {

  }

  logIn(){
try {
  let correo = this.correo;
    let contrasena = this.contrasena;
    this._auth.logIn(correo, contrasena);
} catch (error) {
  console.log(error);
  
}
    
  }
}
