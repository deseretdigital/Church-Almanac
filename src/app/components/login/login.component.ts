import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  error: string = '';

  constructor() { }

  login() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch((error) => {
      this.error = error.message;
    });
  }

  signup() {
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch((error) => {
      this.error = error.message;
    });
  }

  ngOnInit() {
  }

}
