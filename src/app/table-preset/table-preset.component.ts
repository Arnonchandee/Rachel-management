import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-table-preset',
  templateUrl: './table-preset.component.html',
  styleUrls: ['./table-preset.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],

})



 export class TablePresetComponent {
  tableTitle = 'Bind you title here';
  dataSource = ELEMENT_DATA;
  columnsToDisplay:string[] = ['Example Cal', 'Example Cal2', 'Example Cal3', 'Example Cal4'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: PeriodicElement | null;

   
  }





export interface PeriodicElement  {
  name: string;
  edit: string;
  date: string;
  detials: string;
  description: any;

}

const ELEMENT_DATA: PeriodicElement[] = [


];

