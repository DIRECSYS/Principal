import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {ReportsService} from '../../services/reports.service';

@Component({
  selector: 'app-test-result-c',
  templateUrl: './test-result-c.component.html',
  styleUrls: ['./test-result-c.component.scss'],
})
export class TestResultCComponent implements OnInit {
  testsf: any;
  actualtest: any;
  temperatura: any;

  constructor( private toastController: ToastController, private  rs: ReportsService) {
  }

   ngOnInit() {
    this.actualtest = {};
     this.rs.tests.subscribe(data => {
      this.testsf = data;
      this.actualtest = data[data.length-1];
      const a = new Date(this.actualtest.FDP * 1000);
      const month = a.getMonth();
      const date = a.getDate();
      const year = a.getFullYear()-1969;
      this.temperatura = date + '/' +month + '/' + year;
    });
  }



  async loadDetails(test: any){
    const toast = await this.toastController.create({
      header: 'Detalles de prueba',
      message: `<ul>
      <li>Estado Emocional   = ${test.PEE}</li>
      <li>Horas de sueño     = ${test.PHS}</li>
      <li>Alcoholimetro      = ${test.PRA}</li>
      <li>PPrueba de Drogas  = ${test.PRD}</li>
      <li>Prueba de ojos     = ${test.PRO}</li>
      </ul>`,
      icon: 'checkmark-circle',
      position: 'bottom',
      buttons: [ {
          text: 'Listo',
          role: 'cancel',
        }
      ]
    });
    await toast.present();
  }
  }

