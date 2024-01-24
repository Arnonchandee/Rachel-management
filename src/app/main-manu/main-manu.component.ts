import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-manu',
  templateUrl: './main-manu.component.html',
  styleUrls: ['./main-manu.component.css']

})

export class MainManuComponent {
  hidden = false;
isdiabled: string|string[]|Set<string>|{ [klass: string]: any; }|null|undefined;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}

