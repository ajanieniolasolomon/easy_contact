import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class MainService {
  user: Observable<firebase.User>;
  UserCollectionRef: AngularFirestoreCollection<User>;
  User$: Observable<User[]>;
  MessageCollectionRef: AngularFirestoreCollection<Message>;
 Message$: Observable<Message[]>;
  constructor(private firebaseAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.user = firebaseAuth.authState;
    this.UserCollectionRef = this.afs.collection<User>('user');
    this.User$ = this.UserCollectionRef.valueChanges();
    this.MessageCollectionRef = this.afs.collection<Message>('message');
    // this.Message$ = this.MessageCollectionRef.valueChanges();
  }
  login(d) {
  return  this.firebaseAuth
      .auth
      .signInAndRetrieveDataWithEmailAndPassword(d.value.email, d.value.password);
  }
  Register(data) {
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(data.email, data.password)
     .then(dat => {
  // this.Saveinfor(dat, data);
console.log(dat.user.uid);
this.Saveinfor(dat, data);
     });
   }
   Saveinfor(dat, data) {
   return this.UserCollectionRef.add({ uid: dat.user.uid, email: data.email, status: 'online', company_name: data.companyname });

   }
 Message() {
return this.afs.collection('message', ref => ref.where('id', '==', localStorage.getItem('contact_id')) ).snapshotChanges()
.map(actions => {
  return actions.map(a => {
    const data = a.payload.doc.data();
    const id = a.payload.doc.id;
    console.log(data);
    console.log(id);
    return { id, data };
  });
});
}

}
export interface User {
  email: string;
status?: string;
  uid: string;
  company_name: string;
}
interface Message {
  email: any;
username: any;
phone_number: any;
message: any;
id?: string;
}
