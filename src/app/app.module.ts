import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgotPassComponent } from './auth/forgot-pass/forgot-pass.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ViewTaskComponent } from './dashboard/view-task/view-task.component';
import { TaskDetailComponent } from './dashboard/task-detail/task-detail.component';
import { AddUserComponent } from './dashboard/add-user/add-user.component';
import { ViewUserComponent } from './dashboard/view-user/view-user.component';
import { AddProjectComponent } from './dashboard/add-project/add-project.component';
import { ViewProjectComponent } from './dashboard/view-project/view-project.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { TaskListComponent } from './dashboard/task-list/task-list.component';

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
    TaskListComponent
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
