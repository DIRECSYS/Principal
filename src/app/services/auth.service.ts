import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from '@firebase/app-compat';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private _auth: AngularFireAuth) { }

}