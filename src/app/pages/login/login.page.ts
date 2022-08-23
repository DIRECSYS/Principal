import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ReportsService } from 'src/app/services/reports.service';
import { Validators, FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public sesionIniciada: boolean;
  public usuario: any;

  items2: any;
  ngForm : FormGroup;

  
  constructor(private rs: ReportsService, private _authService: AuthService ,public formBuilder: FormBuilder) {

  }

  ngOnInit(): void {

    this.ngForm = this.formBuilder.group({
      user: ['', [Validators.required, Validators.minLength(2)]],
   })

    
    this.usuarioLoggeado()
  }

  usuarioLoggeado(){
    this._authService.getInfoUsuarioLoggeado().subscribe(userData=>{
      if(userData != null){
        this.sesionIniciada = true;
        this.usuario = userData;
      }
      else{
        this.sesionIniciada = false;
      }
    })
  }

  login(){

    let usuario = this.usuario;

    if (usuario == "admin"){
        location.href = "/admin-tabs";
      }
      else if ( usuario == "user"){
        location.href = "/tabs"
      }
  }

  logOut(): void{
    this._authService.logOut().then(userData => {
      this.sesionIniciada = false;
    })
  }
}
