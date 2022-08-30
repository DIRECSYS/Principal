import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastController, LoadingController, AlertController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private email:string;
  private password:string;
  private errorMsg:string;
  
  constructor(private auth: AngularFireAuth, private router:Router, private toastController: ToastController,public loadingController: LoadingController, public alertController: AlertController) { }

  signUp(){
    this.auth.createUserWithEmailAndPassword(this.email, this.password)
    .then(userObj =>{
      if(userObj.user){
        console.log(userObj.user);
      }
    })
    .catch(error=>{
      console.log("Login failed, error: ",error);
      this.errorMsg = error.message;
    });
  }

  logIn(email:string, password:string){
    
    this.auth.signInWithEmailAndPassword(email, password)
    .then(userObj => {
      if(userObj.user){
        console.log(userObj.user);
        location.href = "/admin-tabs/dashboard";
        /*this.router.navigate(['/login']);*/
      }
    })
    .catch(error=>{
      console.log("Login failed, error: ",error);
      this.errorMsg = error.message;
    });
  }

  recoverPassword() {
    this.auth.sendPasswordResetEmail(this.email)
      .then(data => {
        console.log(data);
        this.presentToast('Password reset email sent',  'bottom', 1000); // this is toastController
        /*this.router.navigateByUrl('/login');*/
      })
      .catch(error => {
        console.log("Login failed, error: ",error);
        this.errorMsg = error.message;
      });
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

}