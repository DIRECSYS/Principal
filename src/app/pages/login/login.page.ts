import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public correo: any;
  public contrasena: any;

  validations_form: FormGroup;
  errorMsg: string = "";
  
  constructor(private _auth: AuthService, private _router:Router, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }

  validation_messages = {
    'email': [
      { type: 'required', message: 'El correo es requerido' },
      { type: 'pattern', message: 'Ingresa un correo válido' }
    ],
    'password': [
      { type: 'required', message: 'La contraseña es requerida.' },
      { type: 'minlength', message: 'La contraseña debe de ser mayor a 5 caracteres.' }
    ]
  };

  logIn(value){
    try{
    this._auth.logIn(value)
    .then(res=>{
      console.log(res);
      this.errorMsg = "";
      //agregar routeo aqui
    },
    err=>{
      this.errorMsg=err.message;
    })
    .catch(error => {
      this.errorMsg = 'Error - ' + error.message;
    })
  }catch(error) {
    this.errorMsg = 'Error - ' + error.message;
  }
}
}
