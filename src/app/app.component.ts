import { Component, Output } from '@angular/core';

@Output ()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mei';
  buttoning = true;
  opensidenav = false;
  isLogin: boolean = false;

}
