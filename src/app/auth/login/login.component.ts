import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router'; 
import { AuthenticationService } from '../../service/authentication.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,BrowserModule,RouterOutlet,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  onSubmit() {
    if (this.email && this.password) {
      this.authService.login({ email: this.email, password: this.password }).subscribe(
        (response: any) => {
          // Handle successful login
          this.router.navigate(['/seller/seller']); // Redirect to dashboard
        },
        (error: any) => {
          // Handle login error
          console.error('Login failed', error);
        }
      );
    }
  }

}
