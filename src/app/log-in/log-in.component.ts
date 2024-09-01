import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { AuthService } from '../auth/service'


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
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
      rememberMe: [false]
    });
  }

  ngOnInit(): void {

  }

  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }

    const { username, password } = this.loginForm.value;

    this.http.post<{ token: string, role: string, username: string }>('http://localhost:3001/api/login', {
      username,
      password
    }).subscribe({
      next: (response) => {
        // Store info
        if (response.token) {
          localStorage.setItem('authToken', response.token);
          localStorage.setItem('role', response.role);
          localStorage.setItem('username', response.username);

          console.log('response', response);

          // Navigate based on role
          if (response.role === 'manager' || response.role === 'employee') {
            this.router.navigate(['/home']);
          } 
          else if(response.role === '') {
            this.router.navigate(['/log-in']);
            alert('Unauthorized role1');
          }
          else {
            this.router.navigate(['/log-in']);
            alert('Unauthorized role2');
          }
          


        }
      },
      error: (error) => {
        console.error('Login failed', error);
        alert('Login failed, please check your credentials');
      }
    });
  }
}
