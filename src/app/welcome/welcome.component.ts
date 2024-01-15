import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  @Output() openSignNav: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  openSingnNav() {
    this.openSignNav.emit();
    
  }

}
