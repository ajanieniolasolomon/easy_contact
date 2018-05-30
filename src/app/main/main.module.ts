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
import { MainPipe } from '../main.pipe';
const config = {
  apiKey: 'AIzaSyBPHmbQYvjrqeX24SncmxAEWEXPzOvNXZc',
    authDomain: 'icontact-33034.firebaseapp.com',
    databaseURL: 'https://icontact-33034.firebaseio.com',
    projectId: 'icontact-33034',
    storageBucket: 'icontact-33034.appspot.com',
    messagingSenderId: '561594539296'
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
      RegComponent, FsComponent, MainPipe
  ],
  providers: [ AngularFirestore, MainService]
})
export class MainModule { }
