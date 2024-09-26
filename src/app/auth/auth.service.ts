// Toy\src\app\auth\auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3001/api/login'; // Adjust if necessary
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) {
    // Check if the token is in localStorage on app start
    const token = localStorage.getItem('authToken');
    this.isAuthenticatedSubject.next(!!token);
  }

  // login(username: string, password: string): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, { username, password }).pipe(
  //     tap(response => {
  //       if (response.token) {
  //         localStorage.setItem('authToken', response.token);
  //         localStorage.setItem('role', response.role);
  //         localStorage.setItem('username', response.username);
  //         this.isAuthenticatedSubject.next(true);
  //       }
  //     })
  //   );
  // }

  // logout(): void {
  //   localStorage.removeItem('authToken');
  //   localStorage.removeItem('role');
  //   localStorage.removeItem('username');
  //   this.isAuthenticatedSubject.next(false);
  // }

  // getToken(): string | null {
  //   return localStorage.getItem('authToken');
  // }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { username, password }).pipe(
      tap(response => {
        if (response.token) {
          console.log('Login successful:', response); // Log successful login
          localStorage.setItem('authToken', response.token);
          localStorage.setItem('role', response.role);
          localStorage.setItem('username', response.username);
          this.isAuthenticatedSubject.next(true);
        } else {
          console.log('Login failed:', response); // Log failed login
        }
      })
    );
  }

  logout(): void {
    console.log('Logging out'); // Log logout action
    localStorage.removeItem('authToken');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    localStorage.removeItem('userID')
    localStorage.removeItem('customerID');
    localStorage.removeItem('sidebarOpen');
    this.isAuthenticatedSubject.next(false);
  }

  getToken(): string | null {
    const token = localStorage.getItem('authToken');
    console.log('Retrieved token:', token); // Log token retrieval
    return token;
  }


  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }
}