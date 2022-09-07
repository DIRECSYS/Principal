import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoginPage } from '../pages/login/login.page';
import { ToastController } from '@ionic/angular';
import { toastController } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  userData : any;

  constructor(private auth: AngularFireAuth, private tc: ToastController) {
    this.auth.authState.subscribe( (user) => {
      if (user){
        this.userData = user;
      }
    });
   }

   login(email:string, password:string){
    this.auth.signInWithEmailAndPassword(email,password).then( (result) => {
      this.toastSuccess(1);
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


