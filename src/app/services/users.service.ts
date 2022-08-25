import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Observable<any[]>

  constructor( private afs: AngularFirestore) { 
    this.users = afs.collection('users').valueChanges();
  }
}
