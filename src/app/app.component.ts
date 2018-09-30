import { Component } from '@angular/core';
import { Person } from './models/person.model';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent {
  constructor(private firebase: FirebaseService) {
    firebase.initialize();
  }
}
