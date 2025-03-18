import { ForgotPassComponent } from './auth/forgot-pass/forgot-pass.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'forgot-pass', component: ForgotPassComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
