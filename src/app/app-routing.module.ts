import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { ForgotPassComponent } from './auth/forgot-pass/forgot-pass.component';
=======

>>>>>>> 176871401f2cd5f96ba36c50a39c4478b8148faa
import { LoginComponent } from './auth/login/login.component';
import { AddTaskComponent } from './dashboard/add-task/add-task.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { TaskListComponent } from './dashboard/task-list/task-list.component';
import { AddProjectComponent } from './dashboard/add-project/add-project.component';
import { ForgotPassComponent } from './auth/forgot-pass/forgot-pass.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'forgot-pass',
    component: ForgotPassComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {

    path:'tasks', component:TaskListComponent
  },
  {
    path:'sidebar',component:SidebarComponent
  },
<<<<<<< HEAD
  { 
    path:'addtask',component:AddTaskComponent

=======
  {
    path:'addproject',component:AddProjectComponent
>>>>>>> 176871401f2cd5f96ba36c50a39c4478b8148faa
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
