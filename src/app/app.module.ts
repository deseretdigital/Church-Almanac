import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as firebase from 'firebase';
import { RouterModule } from '@angular/router';

import { KeysPipe } from './pipes/keys.pipe';

import { AppComponent } from './app.component';
import { CallingComponent } from './components/calling/calling.component';
import { CountryComponent } from './components/country/country.component';
import { PersonComponent } from './components/person/person.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TemplesComponent } from './components/temples/temples.component';


@NgModule({
  declarations: [
    AppComponent,
    CallingComponent,
    CountryComponent,
    PersonComponent,
    LoginComponent,
    NavbarComponent,
    KeysPipe,
    TemplesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'person', component: PersonComponent },
      { path: 'country', component: CountryComponent },
      { path: 'calling', component: CallingComponent },
      { path: 'temples', component: TemplesComponent },
      { path: 'login', component: LoginComponent },
      { path: '**', component: LoginComponent }]
    )
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
