import { Component, OnInit } from '@angular/core';
import { Person, PersonConfig, CallingConfig, Calling } from '../../models/person.model';
import { countries } from '../../../environments/countries';
import * as firebase from 'firebase';
import { guid } from '../../services/guid.service';
import { Location } from '../../models/location.model';

interface location {
  street: string;
  country: string;
  state: string;
  zip: number;
}

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})

export class PersonComponent implements OnInit {

  countries = countries;
  uid: string = null;
  search: string = '';
  people: Object;
  person: PersonConfig = Person();
  calling: CallingConfig = Calling();
  callings: Object;
  locations: any = {
    birth: Location(),
    death: Location()
  }
  alerts: Array<string> = [];
  editor: any = {
    calling: false,
    person: false
  }

  constructor() {
    this.uid = guid();
    firebase.database().ref('people/').on('value', (snapshot) => {
      this.people = snapshot.val();
    });
    firebase.database().ref('callings/').on('value', (snapshot) => {
      this.callings = snapshot.val();
    });
  }

  alert(msg: string, untilSave?: boolean) {
    const index = this.alerts.length;
    if (this.alerts.indexOf(msg) === -1) {
      this.alerts.push(msg);
      if (!untilSave) {
        var interval = setInterval(() => {
          this.alerts = this.alerts.splice(0, index);
          clearInterval(interval);
        }, 5000);
      }
    }
  }

  reset() {
    this.uid = guid();
    this.alerts = [];
    this.person = Person();
    this.locations.birth = Location()
    this.locations.death = Location()
    this.editor.calling = false;
    this.editor.person = false;
    let modal: HTMLElement = document.querySelector('div.modal') as HTMLElement;
    modal.click();
  }

  add() {
    if (this.calling.uid) {
      if (!this.person.callings) {
        this.person.callings = [this.calling];
      } else {
        let array = [];
        this.person.callings.forEach(calling => {
          if (calling.uid !== this.calling.uid) {
            array.push(calling);
          } else {
            array.push(this.calling);
            this.calling = null;
          }
        });
        if (this.calling) {
          array.push(this.calling);
        }
        this.person.callings = array;
      }
      this.calling = Calling();
      this.alert(`Don't forget to save your updates!`, true);
      this.editor.calling = false;
    }
  }

  save() {
    if (this.person.name.first && this.person.name.last) {
      firebase.database().ref(`people/${this.uid}`).set(this.person).then(() => {
        const editing = this.editor.person;
        this.reset();
        if (editing) {
          this.alert(`Person was successfully saved!`);
        } else {
          this.alert(`Person was successfully added!`);
        }
      })
    } else {
      this.alert(`You forgot to fill out a first and last name.`);
    }
  }

  edit(uid) {
    if (JSON.stringify(uid).length < 30) {
      // calling
      this.calling = JSON.parse(JSON.stringify(this.person.callings[uid]));
      this.editor.calling = true;
    } else {
      // person
      firebase.database().ref(`people/${uid}`).once('value').then((snapshot) => {
        this.person = snapshot.val();
        this.uid = uid;
        this.editor.person = true;
      });
    }
  }

  delete() {
    firebase.database().ref(`people/${this.uid}`).remove().then(() => {
      this.reset();
      this.alert('Person was successfully removed!');
    });
  }

  remove(index) {
    this.person.callings = this.person.callings.splice(0, index);
    this.calling = Calling();
    this.alert(`Don't forget to save your updates!`, true);
  }

  ngOnInit() {
  }

}
