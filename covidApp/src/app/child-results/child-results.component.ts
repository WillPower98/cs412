import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-results',
  templateUrl: './child-results.component.html',
  styleUrls: ['./child-results.component.css']
})
export class ChildResultsComponent implements OnInit {
  @Input('countryData') countryData: any;
  

  constructor() { }

  ngOnInit(): void {
  }

  

}
