import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  auth: boolean = false;

  constructor() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.auth = true;
      } else {
        this.auth = false;
      }
    });
  }

  logout() {
    firebase.auth().signOut();
  }

  ngOnInit() {
  }

}
