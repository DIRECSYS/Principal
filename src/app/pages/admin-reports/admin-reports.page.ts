import { Component, OnInit } from '@angular/core';
import JSPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import {FileOpener} from '@ionic-native/file-opener/ngx';
import {File, IWriteOptions} from '@ionic-native/file/ngx';

@Component({
  selector: 'app-admin-reports',
  templateUrl: './admin-reports.page.html',
  styleUrls: ['./admin-reports.page.scss'],
})
export class AdminReportsPage implements OnInit {
  date: any;
  date2: any;
  constructor(private file: File, private fileOpener: FileOpener) { }

  ngOnInit() {
  }

  generateReport(){
  const pdf = new JSPDF();
  pdf.text('Test',1,1);
  pdf.save('reportTests.pdf');
  console.log('Pdf generated!');
  }

}
