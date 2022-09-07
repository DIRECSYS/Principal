import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
})
export class SplashScreenComponent implements OnInit {

  constructor(private tc: ToastController) { }

  async ngOnInit() {
    const toast = await this.tc.create({
      message: '',
      cssClass: 'splash-screen',
      duration : 3000,
      position : 'middle',

      
    })
    toast.present();
    

  }

}
