import { Component, OnInit } from '@angular/core';
import { CaseServiceService as CaseService} from '.././case-Service.service';


@Component({
  selector: 'app-parent',
  template: '<app-child-form (codeSender)="getCasesByCountry($event)"></app-child-form>'+
  '<app-child-results [countryData]="countryData"></app-child-results>',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  title = 'coronavirus case numbers and deaths';
  countryData: any;

  constructor(private caseService: CaseService){}

  getCasesByCountry(countryCode: string){
    this.caseService.getCasesByCountry(countryCode).subscribe(
      response =>{
        this.countryData =  JSON.stringify(response);
      }
    );
  }

  ngOnInit(): void {
  }

}
