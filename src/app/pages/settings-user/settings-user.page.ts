import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-settings-user',
  templateUrl: './settings-user.page.html',
  styleUrls: ['./settings-user.page.scss'],
})
export class SettingsUserPage implements OnInit {

  user:any;
  
   constructor(private alertController: AlertController, private auth: AuthService, private uS: UsersService) {}

  async editUserAlert() {
    const alert = await this.alertController.create({
      header: 'Completa tu información',
      buttons: ['Descartar','Guardar'],
      cssClass:'alert',
      inputs: [
        {
          placeholder: 'Nombre',
          cssClass:'alertInput'
        },
        {
          type: 'email',
          placeholder: 'Correo',
          
        },
        {
          type: 'tel',
          placeholder: 'Teléfono',
        },
        {
          type: 'date',
          placeholder: 'Fecha de nacimiento',
        },
      ],
    });

    await alert.present();
  }

  ngOnInit() {

    this.uS.users.pipe(take(1)).subscribe( x =>{
      this.user = x.find ( (y:any) => y.uid == this.auth.userData.uid);
      console.log(this.user);
    })
  }

}
