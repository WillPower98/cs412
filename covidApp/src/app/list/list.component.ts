import { Component, OnInit } from '@angular/core';
import { COUNTRIES } from '../data/countryMOCK';
import { COUNTRY } from '../data/country'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  countries: COUNTRY[] = COUNTRIES;
  selectedCountry: COUNTRY;

  constructor() { }

  ngOnInit(): void {
  }

  showCaseNums(countryName: string){
    this.selectedCountry = this.countries.find(nation => nation.countryName === countryName);
  }
}
