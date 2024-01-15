import { NgModule } from "@angular/core";
import { Routes, Router, RouterModule } from "@angular/router";
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { EventsListComponent } from "./events-list/events-list.component";
import { ProcessRequirementsComponent } from "./process-requirements/process-requirements.component";
import { StockManagmentComponent } from "./stock-managment/stock-managment.component";
import { WorkersManagmentComponent } from "./workers-managment/workers-managment.component";
import { WelcomeComponent } from "./welcome/welcome.component";


const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'events-list', component: EventsListComponent },
    { path: 'process-requirements', component: ProcessRequirementsComponent },
    { path: 'stock-managment', component: StockManagmentComponent },
    { path: 'workers-managment', component: WorkersManagmentComponent },



];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
