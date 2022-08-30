import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastController, LoadingController, AlertController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  constructor(private auth: AngularFireAuth, private router:Router, private toastController: ToastController,public loadingController: LoadingController, public alertController: AlertController) { }

  signUp(value){
    return new Promise<any>((resolve, reject)=>{
      this.auth.createUserWithEmailAndPassword(value.email, value.password)
      .then(res=>resolve(res),
      err=> reject(err))
    })
  }

  logIn(value){
    return new Promise<any>((resolve, reject)=>{
      this.auth.signInWithEmailAndPassword(value.email, value.password)
      .then(
        res=> resolve(res),
        err=> reject(err))
    })
  }
    

  recoverPassword(value) {
    return new Promise<any>((resolve,reject)=>{
      this.auth.sendPasswordResetEmail(value.email)
      .then(
        res=> resolve(res),
        err=> reject(err))
        .then(data => {
          console.log(data);
          this.presentToast('Password reset email sent',  'bottom', 1000); // this is toastController
          /*this.router.navigateByUrl('/login');*/
        })
    })
  }

  async presentToast(message, position, duration) {
    const toast = await this.toastController.create({
      message,
      duration,
      position
    });
    toast.present();
  }

  async openLoader() {
    const loading = await this.loadingController.create({
      message: 'Please Wait ...',
      duration: 2000
    });
    await loading.present();
  }

  async closeLoading() {
    return await this.loadingController.dismiss();
  }

  logOut() {
    this.auth.signOut().then(() => {
      /*this.router.navigate(['/login']);*/
    });
  }

  userDetails(){
    return this.auth.user;
  }
}