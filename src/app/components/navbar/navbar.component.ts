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
  route: string | null = null;

  constructor(private Router: Router) {
    Router.events.subscribe((route: any) => {
      this.route = (route.url) ? route.url : null;
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.auth = true;
        Router.navigateByUrl('/temple');
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
