import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgotPassComponent } from './auth/forgot-pass/forgot-pass.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AddTaskComponent } from './dashboard/add-task/add-task.component';
import { ViewTaskComponent } from './dashboard/view-task/view-task.component';
import { TaskDetailComponent } from './dashboard/task-detail/task-detail.component';
import { AddUserComponent } from './dashboard/add-user/add-user.component';
import { ViewUserComponent } from './dashboard/view-user/view-user.component';
import { AddProjectComponent } from './dashboard/add-project/add-project.component';
import { ViewProjectComponent } from './dashboard/view-project/view-project.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPassComponent,
    DashboardComponent,
    AddTaskComponent,
    ViewTaskComponent,
    TaskDetailComponent,
    AddUserComponent,
    ViewUserComponent,
    AddProjectComponent,
    ViewProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
