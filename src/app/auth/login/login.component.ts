import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() onClick: EventEmitter<void> = new EventEmitter();

  onSubmit(form: NgForm){
    console.log(form);
}

  constructor() { }

  ngOnInit(): void {
  }

  onChange() {
    this.onClick.emit();
  }

}
