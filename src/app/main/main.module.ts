import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { DashComponent } from './dash/dash.component';
import { ClarityModule } from '@clr/angular';
import { LoginComponent } from './login/login.component';
import { PrimaryComponent } from './primary/primary.component';
import { PrimarysComponent } from './primarys/primarys.component';
import { SettingComponent } from './setting/setting.component';
import { HistoryComponent } from './history/history.component';
import { BinComponent } from './bin/bin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegComponent } from './reg/reg.component';
import { FsComponent } from './fs/fs.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { MainService } from './main.service';
const config = {
  apiKey: 'AIzaSyDM0qYzbN3NicI6RUlmyUzpXOkFD6XLLLU',
  authDomain: 'ajax-d5074.firebaseapp.com',
  databaseURL: 'https://ajax-d5074.firebaseio.com',
  projectId: 'ajax-d5074',
  storageBucket: 'ajax-d5074.appspot.com',
  messagingSenderId: '769176866623'
};

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    MDBBootstrapModule.forRoot(),
    MaterialModule, ClarityModule,
    ReactiveFormsModule, FormsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
  ],
  declarations: [HomeComponent, DashComponent, LoginComponent,
     PrimaryComponent, PrimarysComponent,
      SettingComponent, HistoryComponent, BinComponent, 
      RegComponent, FsComponent
  ],
  providers: [ AngularFirestore, MainService]
})
export class MainModule { }
