import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';



export interface DialogData {
 eventsDetialInfo:string;
 eventInfo: string;  

}


@Component({
  selector: 'app-add-dialog-main',
  templateUrl: 'add-dialog-main.component.html',
  styleUrls: ['./add-dialog-main.component.css']
})
export class AddDialogMainComponent {
openDialog() {
throw new Error('Method not implemented.');
}

form: FormGroup;
value: any;
ngModel: any;

  constructor(
    private dialogRef: MatDialogRef<AddDialogMainComponent>,
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
      this.dialogRef.close({aa:this.form.value, ff:'', bb:this.data.date()});
    }
  }

  onNoClick() {
    this.dialogRef.close();
  }
} 