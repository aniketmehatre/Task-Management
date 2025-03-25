import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

<<<<<<< Updated upstream

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
=======
import { ForgotPassComponent } from './auth/forgot-pass/forgot-pass.component';
import { LoginComponent } from './auth/login/login.component';
import { AddTaskComponent } from './dashboard/add-task/add-task.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
>>>>>>> Stashed changes
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
    path: 'addtask',
    component: AddTaskComponent,
  },
  {
    path:'tasks', component:TaskListComponent
  },
  {
    path:'sidebar',component:SidebarComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
