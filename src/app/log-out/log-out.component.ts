// Toy\src\app\log-out\log-out.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrl: './log-out.component.css',
})
export class LogOutComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout(); // Clear local storage and update auth status
    this.router.navigate(['/log-in']); // Redirect to login page
  }
}
