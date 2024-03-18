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
import { StockManagmentComponent } from './stock-managment/stock-managment.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WorkersManagmentComponent } from './workers-managment/workers-managment.component';
import { materialModule } from './material.module';
import { MainsystemComponent } from './main-system-section/main-system-section.component';
import { TablePresetComponent } from './table-preset/table-preset.component';










@NgModule({
  declarations: [
    AppComponent,
    StockManagmentComponent,
    EventsListComponent,
    WorkersManagmentComponent,
    ProcessRequirementsComponent,
    AddDialogEventsComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    MainsystemComponent,
    TablePresetComponent,
 
  
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
