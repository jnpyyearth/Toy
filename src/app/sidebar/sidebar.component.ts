// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-sidebar',
//   templateUrl: './sidebar.component.html',
//   styleUrls: ['./sidebar.component.css'],
// })
// export class SidebarComponent {

//   isOpen = false;

//   ngOnInit(): void {
//     const savedState = localStorage.getItem('sidebarOpen');
//     this.isOpen = savedState === 'true';
//   }
//   toggleSidebar() {
//     this.isOpen = !this.isOpen;
//     localStorage.setItem('sidebarOpen', this.isOpen.toString());
//   }
// }


import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service'; // Import AuthService
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  isOpen = false;

  constructor(private authService: AuthService, private router: Router) {}

  // Lifecycle hook for initialization
  ngOnInit(): void {
    const savedState = localStorage.getItem('sidebarOpen');
    this.isOpen = savedState === 'true'; // Initialize sidebar state from localStorage
  }

  // Toggle sidebar open/close
  toggleSidebar(): void {
    this.isOpen = !this.isOpen;
    localStorage.setItem('sidebarOpen', this.isOpen.toString()); // Save sidebar state in localStorage
  }

  // Log out and redirect to login page
  logout(): void {
    this.authService.logout(); // Clear session/auth data
    this.router.navigate(['/log-in']); // Redirect to login page after logout
  }
}
