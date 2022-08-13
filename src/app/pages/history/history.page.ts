import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';

import { ReportsService } from 'src/app/services/reports.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  testsf: any;
  badge: number;

  constructor( private alertController: AlertController, private rs: ReportsService) { }

  async presentAlert(id: string, fdp: any, pee: any,phs: number,pra: number,prd: number,pro: number){
    const a = new Date(fdp * 1000);
    // eslint-disable-next-line max-len
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const year = a.getFullYear() - 1969;
    const month = months[a.getMonth()];
    const date = a.getDate();
    const time = date + ' ' + month + ' ' + year + ' ';

    const alert = await this.alertController.create({
      header: `Folio : ${id}`,
      subHeader: `Fecha : ${time}`,
      message: `<ul>
      <li>Estado Emocional   = ${pee}</li>
      <li>Horas de sueño     = ${phs}</li>
      <li>Alcoholimetro      = ${pra}</li>
      <li>PPrueba de Drogas  = ${prd}</li>
      <li>Prueba de ojos     = ${pro}</li>
      </ul>`,
      buttons: ['Regresar'],
      cssClass: 'custom-alert',
    });

    await alert.present();
  }


  ngOnInit() {
    this.rs.tests.subscribe(data => { this.testsf = data ;  this.badge = data.length;});
  }

}
