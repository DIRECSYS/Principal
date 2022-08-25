import { Component, OnInit } from '@angular/core';
import { User } from '@firebase/auth';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.page.html',
  styleUrls: ['./admin-users.page.scss'],
})
export class AdminUsersPage implements OnInit {
  users:any;
  constructor( private us: UsersService) { }

  ngOnInit() {
    this.us.users.subscribe( data => {this.users = data; console.log(this.users);});
  }

}
