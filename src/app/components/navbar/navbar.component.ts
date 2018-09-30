import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  auth: boolean = false;

  constructor(private Router: Router) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.auth = true;
        Router.navigateByUrl('/person');
      } else {
        this.auth = false;
        Router.navigateByUrl('/login');
      }
    });
  }

  logout() {
    firebase.auth().signOut();
  }

  ngOnInit() {
  }

}
