import { ForgotPassComponent } from './auth/forgot-pass/forgot-pass.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { TaskListComponent } from './dashboard/task-list/task-list.component';

const routes: Routes = [
 {
   path: '', component: LoginComponent
 },
  {
   path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'forgot', component: ForgotPassComponent
  },
  {
    path:'sidebar',component: SidebarComponent
  },

  {
     path: 'tasks',component: TaskListComponent
     }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
