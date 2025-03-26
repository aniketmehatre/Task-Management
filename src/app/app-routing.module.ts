import { ForgotPassComponent } from './auth/forgot-pass/forgot-pass.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { TaskListComponent } from './dashboard/task-list/task-list.component';
import { AddProjectComponent } from './dashboard/add-project/add-project.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'forgot-pass', component: ForgotPassComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path:'tasks', component:TaskListComponent
  },
  {
    path:'sidebar',component:SidebarComponent
  },
  {
    path:'addproject',component:AddProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
