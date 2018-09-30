import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {

  config = {
    apiKey: 'AIzaSyBws7vxUiKzePxGKxsaN7C1MjMrAuaxioo',
    authDomain: 'church-almanac.firebaseapp.com',
    databaseURL: 'https://church-almanac.firebaseio.com',
    projectId: 'church-almanac',
    storageBucket: '',
    messagingSenderId: '865972213020'
  }

  constructor() {

  }

  initialize() {
    firebase.initializeApp(this.config);
    console.log('FirebaseService: Firebase connection has been initialized.');
  }

  edit() {

  }

  add() {

  }

  remove() {

  }

}
