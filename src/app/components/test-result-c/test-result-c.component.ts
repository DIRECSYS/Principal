import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-test-result-c',
  templateUrl: './test-result-c.component.html',
  styleUrls: ['./test-result-c.component.scss'],
})
export class TestResultCComponent implements OnInit {

  constructor( private toastController : ToastController) { }

  ngOnInit() {}



  async loadDetails(){
    const toast = await this.toastController.create({
      header: 'Detalles de prueba',
      message: `<ul> 
      <li> Prueba 1 = Paso </li>
      <li> Prueba 2 = Paso </li>
      <li> Prueba 3 = Paso </li>
      <li> Prueba 4 = Paso </li>
      </ul>`,
      icon: 'checkmark-circle',
      position: 'bottom',
      buttons: [ {
          text: 'Listo',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  }

