import { Component, OnInit } from '@angular/core';
import { Temple, TempleConfig } from '../../models/temple.model';
import * as firebase from 'firebase';
import { countries } from '../../../environments/countries';
import { states } from '../../../environments/states';
import { guid } from '../../services/guid.service';

@Component({
  selector: 'app-temple',
  templateUrl: './temple.component.html',
  styleUrls: ['./temple.component.scss']
})

export class TempleComponent implements OnInit {

  countries = countries;
  states = states;
  temples = Object;
  results = Object;
  temple: TempleConfig = new Temple({
    name: '',
    architecture: {
      project: {}
    }
  });
  events: Array<any>;
  event: {
    date: string;
    event: string;
  } = {
      date: '',
      event: ''
    };
  editor: any = {
    uid: '',
    save: false,
    event: null
  }
  constructor() {
    this.reset();
    firebase.database().ref('temples/').on('value', (snapshot) => {
      if (snapshot.val()) {
        this.temples = this.results = snapshot.val();
      }
    });
  }

  editEvent(event) {
    event = parseInt(event.target.value);
    this.editor.event = event;
    this.event = this.events[this.editor.event];
  }

  resetEvent() {
    const elem: any = document.querySelector('select#events');
    if (elem) {
      elem.value = null;
    }
    this.editor.event = null;
    this.event.event = '';
    this.event.date = '';
  }

  addEvent() {
    if (this.editor.event >= 0 && this.editor.event !== null) {
      this.events[this.editor.event] = JSON.parse(JSON.stringify(this.event));
    } else {
      this.events.push({
        event: this.event.event,
        date: this.event.date
      });
    }
    this.resetEvent();
  }

  reset() {
    this.editor.save = false;
    this.resetEvent();
    this.events = [];
    this.editor.uid = guid();
    this.events = [];
    this.event.event = '';
    this.event.date = '';
    this.temple = new Temple({
      name: '',
      architecture: {
        project: {}
      }
    });
  }

  edit(key) {
    this.reset();
    firebase.database().ref(`temples/${key}`).once('value', (snapshot) => {
      this.editor.uid = key;
      this.temple = new Temple(snapshot.val());
      if (!this.temple.architecture) {
        this.temple.architecture = {};
      }
      if (!this.temple.architecture.project) {
        this.temple.architecture.project = {};
      }
      if (this.temple.dates) {
        this.events = this.temple.dates;
      }
      this.editor.save = true;
      window.scrollTo(0, 0);
    });
  }

  save() {
    if (this.temple.name) {
      this.temple.dates = this.events;
      firebase.database().ref(`temples/${this.editor.uid}`).set(this.temple).then(() => {
        this.reset();
      })
    }
  }

  delete() {
    firebase.database().ref(`temples/${this.editor.uid}`).remove().then(() => {
      this.reset();
    });
  }

  ngOnInit() {
  }

}
