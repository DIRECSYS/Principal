import { Component, OnInit } from '@angular/core';
import JSPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import {FileOpener} from '@ionic-native/file-opener/ngx';
import {File, IWriteOptions} from '@ionic-native/file/ngx';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-admin-reports',
  templateUrl: './admin-reports.page.html',
  styleUrls: ['./admin-reports.page.scss'],
})
export class AdminReportsPage implements OnInit {
  date: any;
  date2: any;
  reports: any;
  presentingElement = null;
  constructor(private file: File, private fileOpener: FileOpener, private rs: ReportsService) { 

  }

  ngOnInit() {
    this.rs.tests.subscribe(data => { this.reports = data ;});
    this.presentingElement = document.querySelector('.ion-page');
  }

  generateReport(){
  const pdf = new JSPDF();
  pdf.text('Reportes',20,10);
  console.log(this.reports)
  var line = 30;  
  this.reports.forEach(element => {
    pdf.rect(20, line, 170, 25)
    pdf.text('Folio: ' + element.IDT,25,line+10);
    pdf.text('Resultado: ' + element.EDP,25,line+20);
    line=line+50;   
  });
  pdf.save('reportTests'+ Date.now()+'.pdf');
  console.log('Pdf generated!');
  }

}
