import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value.username);

      if (this.registrationForm.value.password !== this.registrationForm.value.confirmPassword) {
        window.alert('Passwords do not match');
        return;
      }
      else {
        let userData = {
          "firstName": this.registrationForm.value.firstName,
          "lastName": this.registrationForm.value.lastName,
          "email": this.registrationForm.value.email,
          "username": this.registrationForm.value.username,
          "phone": this.registrationForm.value.phone,
          "password": this.registrationForm.value.password
        }

        localStorage.setItem('userData', JSON.stringify(userData));

        this.router.navigate(['/login']);
        window.alert('Registration successful');
      }
    }
  }
}
