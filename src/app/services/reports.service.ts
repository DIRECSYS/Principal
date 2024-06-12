import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  tests: Observable<any[]>;

  constructor(private afs: AngularFirestore) {

    this.tests= afs.collection('tests').valueChanges();


   }




}
