import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  name : string
  items2: any;
  constructor(private rs: ReportsService) { 

  }

  ngOnInit() {
   this.rs.tests.subscribe(data => { this.items2 = data ; console.log(this.items2)})
 
  }


  login(){

    let a = this.name;
     
    if (a == "admin"){
        location.href = "/admin-tabs";
      }
      else if ( a == "user"){
        location.href = "/tabs"
      }
  }
}
