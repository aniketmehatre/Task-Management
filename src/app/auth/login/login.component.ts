import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }

  navigateToForgotPassword() {
    this.router.navigate(['/forgot-pass']);
  }
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  login() {
    this.errorMessage = '';

    if (!this.username || !this.password) {
      this.errorMessage = 'Username and password are required.';
      return;
    }

   
   
    if (this.password.length < 8) {
      this.errorMessage = 'Password must be at least 8 characters long.';
      return;
    }
   
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    if (!passwordPattern.test(this.password)) {
      this.errorMessage = 'Password must contain at least one letter, one number, and one special character.';
      return;
    }
    
  
    this.errorMessage = '';
    

    console.log('Username:', this.username);
    console.log('Password:', this.password);

 
    this.username = '';
    this.password = '';
  }
}

