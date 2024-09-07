import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { AuthService } from '../auth/service'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false],
    });
  }

  ngOnInit(): void {}

  // onLogin() {
  //   if (this.loginForm.invalid) {
  //     return;
  //   }

  //   const { username, password } = this.loginForm.value;

  //   console.log('LoginForm values:', this.loginForm.value);

  //   this.http.post<{ token: string, role: string, username: string }>('http://localhost:3001/api/login', {
  //     username,
  //     password
  //   }).subscribe({
  //     next: (response) => {
  //       console.log('API Response:', response);

  //       if (response.token) {
  //         localStorage.setItem('authToken', response.token);
  //         localStorage.setItem('role', response.role);
  //         localStorage.setItem('username', response.username);

  //         // Navigate based on role
  //         if (response.role === 'manager' || response.role === 'employee' || response.role === 'user') {
  //           this.router.navigate(['/home']);
  //         } else {
  //           this.router.navigate(['/log-in']);
  //           alert('Unauthorized role');
  //         }
  //       }
  //     },
  //     error: (error) => {
  //       console.error('Login failed', error);
  //       alert('Login failed, please check your credentials');
  //     }
  //   });
  // }
  onLogin() {
    if (this.loginForm.invalid) {
      console.error('Form is invalid');
      return;
    }

    const { username, password } = this.loginForm.value;

    console.log('LoginForm values:', this.loginForm.value); // Log form values

    this.http
      .post<{ token: string; role: string; username: string }>(
        'http://localhost:3001/api/login',
        {
          username,
          password,
        }
      )
      .subscribe({
        next: (response) => {
          console.log('API Response:', response);

          if (response.token) {
            localStorage.setItem('authToken', response.token);
            localStorage.setItem('role', response.role);
            localStorage.setItem('username', response.username);

            if (['manager', 'employee', 'user'].includes(response.role)) {
              this.router.navigate(['/home']);
            } else {
              this.router.navigate(['/log-in']);
              alert('Unauthorized role');
            }
          }
        },
        error: (error) => {
          console.error('Login failed', error);
          alert('Login failed, please check your credentials');
        },
      });
  }
}
