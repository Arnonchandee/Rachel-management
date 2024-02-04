import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AddDialogEventsComponent } from './events-list/add-dialog-events/add-dialog-events.component';
import { EventsListComponent } from './events-list/events-list.component';
import { ProcessRequirementsComponent } from './process-requirements/process-requirements.component';
import { AddDialogComponent } from './stock-managment/add-dialog/add-dialog.component';
import { StockManagmentComponent } from './stock-managment/stock-managment.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WorkersManagmentComponent } from './workers-managment/workers-managment.component';
import { materialModule } from './material.module';
import { MainManuComponent } from './main-manu/main-manu.component';
import { TablePresetComponent } from './table-preset/table-preset.component';
import { AddDialogMainComponent } from './table-preset/add-dialog/add-dialog-main.component';







@NgModule({
  declarations: [
    AppComponent,
    StockManagmentComponent,
    EventsListComponent,
    WorkersManagmentComponent,
    ProcessRequirementsComponent,
    AddDialogComponent,
    AddDialogEventsComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    MainManuComponent,
    TablePresetComponent,
    AddDialogMainComponent
  
    
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    materialModule,
   
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
