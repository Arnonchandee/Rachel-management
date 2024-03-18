import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';



export interface DialogData {
 eventsDetialInfo:string;
 eventInfo: string;  

}


@Component({
  selector: 'app-add-dialog-events',
  templateUrl: './add-dialog-events.component.html',
  styleUrls: ['./add-dialog-events.component.css']
})
export class AddDialogEventsComponent {

form: FormGroup;
value: any;


  constructor(
    private dialogRef: MatDialogRef<AddDialogEventsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      // Define your form controls and validators here
      
    });
  }
  
  onSave() {
    if (this.form.valid) {
      // Pass the form data back to the main component
      this.dialogRef.close({aa:this.form.value, ff:'', bb:this.data.date() });
    }
  }

  onNoClick() {
    this.dialogRef.close();
    
  }
} 
