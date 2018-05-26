import { BrowserModule } from '@angular/platform-browser';

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
