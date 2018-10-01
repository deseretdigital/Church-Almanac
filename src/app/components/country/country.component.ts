import { Component, OnInit } from '@angular/core';
import { countries } from '../../../environments/countries';
import { Country, CountryConfig, Year, YearConfig } from '../../models/country.model';
import * as firebase from 'firebase';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  countries = countries;
  uid: number = null;
  country: CountryConfig = Country();
  year: YearConfig = Year();
  alerts: Array<string> = [];

  constructor() {

  }

  save() {
    if (this.year.year && JSON.stringify(Year()) !== JSON.stringify(this.year)) {
      firebase.database().ref(`countries/${this.uid}/years/${this.year.year}`).set(this.year).then(() => {
        this.year = Year();
        this.alert('Success, your year data was stored!');
      });
    } else if (JSON.stringify(Year()) !== JSON.stringify(this.year)) {
      this.alert('Year was not saved because it was empty!');
    }
    firebase.database().ref(`countries/${this.uid}`).set(this.country).then(() => {
      this.alert('All information about this country was saved!');
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

  select() {
    firebase.database().ref(`countries/${this.uid}`).on('value', (snapshot) => {
      this.country = (snapshot.val()) ? snapshot.val() : Country();
      this.year = Year();
    });
  }

  edit(year?) {
    year = (!year) ? this.year.year : year;
    let blank = JSON.parse(JSON.stringify((Year())));
    blank.year = JSON.stringify(year);
    if (this.year.year && JSON.stringify(Year().year = year) !== JSON.stringify(this.year.year = parseInt(year))) {
      const ref = firebase.database().ref(`countries/${this.uid}/years/${this.year.year}`);
      ref.once('value').then((snapshot) => {
        if (JSON.stringify({ ...Year(), ...snapshot.val() }) !== JSON.stringify(this.year)) {
          ref.set(this.year).then(() => {
            this.alert('Don\'t forget to press save before you switch years!');
            this.year = { ...Year(), ...this.country.years[year] };
          });
        } else {
          this.year = { ...Year(), ...this.country.years[year] };
        }
      });
    } else if (this.country.years && this.country.years[year]) {
      this.year = { ...Year(), ...this.country.years[year] };
    }
  }

  reset() {
    this.uid = null;
    this.country = Country();
    this.year = Year();
  }

  ngOnInit() {
  }

}
