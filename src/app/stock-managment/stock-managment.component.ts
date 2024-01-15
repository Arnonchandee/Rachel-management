import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogComponent } from './add-dialog/add-dialog.component';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  action:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  
  
];

@Component({
  selector: 'app-stock-managment',
  templateUrl: './stock-managment.component.html',
  styleUrls: ['./stock-managment.component.css'],
})
export class StockManagmentComponent {
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol', 'demo-action'];
  dataSource = ELEMENT_DATA;
  
  constructor(public dialog: MatDialog) {}
  name!: string;
  animal!: string;
  
  openDialog(): void {
    
    const dialogRef = this.dialog.open(AddDialogComponent, {data: {name: this.name, animal: this.animal},}
      );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  
}

