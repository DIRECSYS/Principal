import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-settings-user',
  templateUrl: './settings-user.page.html',
  styleUrls: ['./settings-user.page.scss'],
})
export class SettingsUserPage implements OnInit {

   constructor(private alertController: AlertController) {}

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
  }

}
