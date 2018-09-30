import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as firebase from 'firebase';


import { AppComponent } from './app.component';
import { CallingComponent } from './components/calling/calling.component';
import { CountryComponent } from './components/country/country.component';
import { PersonComponent } from './components/person/person.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CallingComponent,
    CountryComponent,
    PersonComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBws7vxUiKzePxGKxsaN7C1MjMrAuaxioo',
      authDomain: 'church-almanac.firebaseapp.com',
      databaseURL: 'https://church-almanac.firebaseio.com',
      projectId: 'church-almanac',
      storageBucket: '',
      messagingSenderId: '865972213020'
    });
  }
}
