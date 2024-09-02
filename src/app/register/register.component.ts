import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient, // Inject HttpClient
    private router: Router // Inject Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.nonNullable.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Ensures phone number is 10 digits
      role: ['user', Validators.required] // Default role set to 'user'
    }, { validators: this.passwordMatchValidator });
  }

  // Custom validator to check if password and confirmPassword match
  passwordMatchValidator: ValidatorFn = (formGroup: AbstractControl): { [key: string]: any } | null => {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password && confirmPassword && password !== confirmPassword ? { mismatch: true } : null;
  };

  onRegister() {
    this.submitted = true;

    // If the form is invalid, return early
    if (this.registerForm.invalid) {
      return;
    }

    const { firstName, lastName, username, password, email, phone, role } = this.registerForm.value;

    // Send POST request to backend
    this.http.post('http://localhost:3001/api/register', {
      firstName,
      lastName,
      username,
      password,
      email,
      phone,
      role
    }).subscribe({
      next: (response) => {
        console.log('User registered successfully', response);
        alert('Registration successful!');
        this.router.navigate(['/log-in']);
      },
      error: (error) => {
        console.error('Registration failed', error);
        alert('Registration failed. Please try again.');
      }
    });
  }
}