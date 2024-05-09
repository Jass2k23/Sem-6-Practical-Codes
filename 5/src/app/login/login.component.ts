import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      let userData = localStorage.getItem('userData');

      if (userData) {
        let user = JSON.parse(userData);

        if (this.loginForm.value.username === user.username && this.loginForm.value.password === user.password) {
          console.log('Login successful');
          window.alert('Login successful');
          this.router.navigate(['/profile']);
        } else {
          console.log('Invalid credentials');
          window.alert('Invalid credentials');
          return;
        }
      }
    }
  }
}