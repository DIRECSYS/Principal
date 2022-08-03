import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  constructor( private alertController: AlertController) { }

  async presentAlert(a:string){
    const alert = await this.alertController.create({
      header: `Folio : ${a}`,
      subHeader: 'Fecha : 12/08/2022',
      message: `<ul> 
      <li>Prueba 1   = Paso</li>
      <li>Prueba 2   = No Paso</li>
      <li>Prueba 3   = No Paso</li>
      <li>Prueba 4   = Paso</li>
      
      </ul>`,
      buttons: ['Regresar'],
      cssClass: 'custom-alert',
      
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
