import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { guid } from '../../services/guid.service';

@Component({
  selector: 'app-calling',
  templateUrl: './calling.component.html',
  styleUrls: ['./calling.component.scss']
})
export class CallingComponent implements OnInit {

  callings: Object;
  uid: string = guid();
  editing: boolean = false;
  name: string = '';
  selected: string = '';

  constructor() {
    firebase.database().ref('callings/').on('value', (snapshot) => {
      this.callings = snapshot.val();
    });
  }

  reset() {
    this.selected = '';
    this.name = '';
    this.editing = false;
    this.uid = guid();
  }

  edit(key?) {
    this.editing = true;
    if (key) {
      this.selected = key;
    }
    this.uid = this.selected;
    this.name = this.callings[this.uid];
  }

  remove(key) {
    firebase.database().ref(`callings/${key}`).remove();
  }

  add() {
    firebase.database().ref(`callings/${this.uid}`).set(this.name);
    this.reset();
  }

  ngOnInit() {
  }

}
