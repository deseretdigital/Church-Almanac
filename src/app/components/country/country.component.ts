import { Component, OnInit } from '@angular/core';
import { countries } from '../../../environments/countries';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  countries = countries;
  
  constructor() {

  }

  ngOnInit() {
  }

}
