import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
// Justify data type of the binding**
  maxDate: any;
  
  @Output() onClick: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    // **the function for date picker to have max of age 18 years, setFullYear and getFullYear is a Javascript method so it's known by Javascript, - 18 means max from 18 only
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }
  //this comes from HTML <Form>
  onSubmit(form: NgForm){
    console.log(form);
  }

  onChange() {
    this.onClick.emit();
  }


}
