// Toy\src\app\auth\auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: any): boolean {
    const requiredRoles: string[] = route.data.roles;
    if (this.authService.isAuthenticated()) {
      const userRole = this.authService.getRole();
      if (requiredRoles.includes(userRole || '')) {
        return true;
      } else {
        this.router.navigate(['/unauthorized']); // Redirect to unauthorized page
        return false;
      }
    } else {
      this.router.navigate(['/unauthorized']); // Redirect to login if not authenticated
      return false;
    }
  }

}