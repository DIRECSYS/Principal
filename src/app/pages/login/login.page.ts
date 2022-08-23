import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public sesionIniciada: boolean;
  public usuario: any;

  items2: any;


  constructor(private rs: ReportsService, private _authService: AuthService) {

  }

  ngOnInit(): void {
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
