import { NgModule } from '@angular/core';
<<<<<<< Updated upstream
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
=======
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
>>>>>>> Stashed changes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForgotPassComponent } from './auth/forgot-pass/forgot-pass.component';
<<<<<<< Updated upstream
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ViewTaskComponent } from './dashboard/view-task/view-task.component';
import { TaskDetailComponent } from './dashboard/task-detail/task-detail.component';
import { AddUserComponent } from './dashboard/add-user/add-user.component';
import { ViewUserComponent } from './dashboard/view-user/view-user.component';
=======
import { LoginComponent } from './auth/login/login.component';
>>>>>>> Stashed changes
import { AddProjectComponent } from './dashboard/add-project/add-project.component';
import { AddTaskComponent } from './dashboard/add-task/add-task.component';
import { AddUserComponent } from './dashboard/add-user/add-user.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { TaskDetailComponent } from './dashboard/task-detail/task-detail.component';
import { TaskListComponent } from './dashboard/task-list/task-list.component';
import { ViewProjectComponent } from './dashboard/view-project/view-project.component';
import { ViewTaskComponent } from './dashboard/view-task/view-task.component';
import { ViewUserComponent } from './dashboard/view-user/view-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPassComponent,
    DashboardComponent,
    ViewTaskComponent,
    TaskDetailComponent,
    AddUserComponent,
    ViewUserComponent,
    AddProjectComponent,
    ViewProjectComponent,
    SidebarComponent,
    TaskListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
