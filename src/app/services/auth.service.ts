import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoginPage } from '../pages/login/login.page';
import { ToastController } from '@ionic/angular';
import { toastController } from '@ionic/core';
import { UsersService } from './users.service';
import {take} from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  userData : any;
  userType: any;

  constructor(private auth: AngularFireAuth, private tc: ToastController, private uS: UsersService, private router: Router) {
    this.auth.authState.subscribe( (user) => {
      if (user){
        this.userData = user;
      }
    });
   }

   login(email:string, password:string){
    this.auth.signInWithEmailAndPassword(email,password).then( (result) => {
      this.toastSuccess(1);
      var role;
      this.uS.users.pipe(take(1)).subscribe( (x:any) => {
        role = (x.find( (y:any) => y.uid == result.user?.uid)).TDU;
        if(role == 1){
          this.router.navigate(['admin-tabs'])
        }
        else if (role== 0){
          this.router.navigate(['tabs'])
        }
      })
      console.log('Sesion Iniciada!');
      
    }).catch( () => {
      this.toastSuccess(2)
      console.log('Error, No se pudo iniciar sesion');
    })

   }

   


   logout(){
    this.auth.signOut();
   }

   async toastSuccess(type:number){
    if(type === 1){
      const toast = await this.tc.create({
        message: 'Bienvenido!',
        duration: 2000
      });
      toast.present();
    }else {
      const toast = await this.tc.create({
        message: 'No se pudo iniciar sesion',
        duration: 1000
        
      });
      toast.present();
    }
   }
}


