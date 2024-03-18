import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSidenavModule} from '@angular/material/sidenav'
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressBarModule} from '@angular/material/progress-bar';








@NgModule ({
    imports: [MatButtonModule, MatIconModule, MatInputModule,  MatTableModule, MatDialogModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule ,  MatCheckboxModule, MatSidenavModule,MatDividerModule, MatMenuModule,MatBadgeModule, MatProgressBarModule,MatSidenavModule, MatButtonModule],

    exports: [MatButtonModule, MatIconModule, MatInputModule, MatTableModule, MatDialogModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule,MatCheckboxModule, MatSidenavModule,MatDividerModule , MatMenuModule,MatBadgeModule,MatProgressBarModule,]
})

export class materialModule {}
