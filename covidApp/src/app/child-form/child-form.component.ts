import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.css']
})
export class ChildFormComponent implements OnInit {
  countryCodeInput: any;
  @Output() codeSender : EventEmitter <number> = new EventEmitter<number>();
  
  constructor() { }

  sendCode(){
    this.codeSender.emit(this.countryCodeInput);
  }

  ngOnInit(): void {
  }
 

}
