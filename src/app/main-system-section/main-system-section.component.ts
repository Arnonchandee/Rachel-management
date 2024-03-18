import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-system-section',
  templateUrl: './main-system-section.component.html',
  styleUrls: ['./main-system-section.component.css']

})

export class MainsystemComponent {
  hidden = false;
isdiabled: string|string[]|Set<string>|{ [klass: string]: any; }|null|undefined;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}

