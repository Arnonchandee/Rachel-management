import { Component, } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'Cake no.9', name: '🔴', weight: 'ฟหกด่าสว', symbol: 'H'},
  {position: 'Cake no.30', name: '🟢', weight: 'ฟหกด่าสว', symbol: 'He'},
  {position: 'Cake no.21', name: '🟡', weight:'ฟหกด่าสว', symbol: 'Li'},
  {position: 'Cake no.7', name: '🟡', weight: 'ฟหกด่าสว', symbol: 'Be'},
  {position: 'Cake no.8', name: '🔴', weight: 'ฟหกด่าสว', symbol: 'B'},
  {position: 'Cake no.2', name: '🔴', weight: 'ฟหกด่าสว', symbol: 'C'},
  {position: 'Cake no.1', name: '🟢', weight: 'ฟหกด่าสว', symbol: 'N'},
  {position: 'Cake no.3', name: '🔴', weight: 'ฟหกด่าสว', symbol: 'O'},
  {position: 'Cake no.24', name: '🟢', weight: 'ฟหกด่าสว', symbol: 'F'},
  {position: 'Cake no.15', name: '🟢', weight: 'ฟหกด่าสว', symbol: 'Ne'},
];
@Component({
  selector: 'app-process-requirements',
  templateUrl: './process-requirements.component.html',
  styleUrls: ['./process-requirements.component.css'],

})
export class ProcessRequirementsComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}


