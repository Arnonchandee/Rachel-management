import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogEventsComponent } from './add-dialog-events/add-dialog-events.component';


@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class EventsListComponent {

  title = 'Dashboard';

  eventsInfo!: string;
  eventsdetialinfo! :string;
  date!:Date;
  



  dataSource: PeriodicElement[] = ELEMENT_DATA;

  columnsToDisplay = ['name', 'date', 'detials', 'edit', ];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand' ];
  expandedElement!: PeriodicElement | null;
  picker: any;
  


  constructor(public dialog: MatDialog) {}


  openDialog(): void {
    const dialogRef = this.dialog.open(AddDialogEventsComponent, {
      data: {eventsInfo: this.eventsInfo, eventsDetialInfo: this.eventsdetialinfo , date: this.date },
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
  
      if (result) {
        const newElement: PeriodicElement = {
          edit: 'Copy',
          name: result.aa,
          date: result.bb.toDateString(),
          detials: 'Tap for details...',
          description: result.jj,
        };
        
        this.dataSource.push(newElement);
        this.dataSource = [...this.dataSource];
      }
    });
  }
  
  
}
  


export interface PeriodicElement {
  name: string;
  edit: string;
  date: string;
  detials: string;
  description: any;
}

const ELEMENT_DATA: PeriodicElement[] = [

];

