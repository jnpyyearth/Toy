// import { Component, OnInit } from '@angular/core';


// @Component({
//   selector: 'app-sidebar-ownner',
//   templateUrl: './sidebar-ownner.component.html',
//   styleUrls: ['./sidebar-ownner.component.css'] 
// })
// export class SidebarOwnnerComponent {

//   isOpen = false;
  

//   ngOnInit(): void {
//     const savedState = localStorage.getItem('sidebarOpen');
//     this.isOpen = savedState === 'true';
//     }

//   toggleSidebar1() {
//     this.isOpen = !this.isOpen;
//     console.log('Sidebar isOpen: ', this.isOpen);
//   }
  

// }


import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service'; // Import AuthService
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-ownner',
  templateUrl: './sidebar-ownner.component.html',
  styleUrls: ['./sidebar-ownner.component.css'],
})
export class SidebarOwnnerComponent implements OnInit {
  isOpen = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const savedState = localStorage.getItem('sidebarOpen');
    this.isOpen = savedState === 'true'; // Retrieve the sidebar state from localStorage
  }

  toggleSidebar1(): void {
    this.isOpen = !this.isOpen;
    console.log('Sidebar isOpen: ', this.isOpen);
    localStorage.setItem('sidebarOpen', this.isOpen.toString()); // Save the sidebar state in localStorage
  }

  logout(): void {
    this.authService.logout(); // Call logout method in AuthService
    this.router.navigate(['/log-in']); // Navigate to login page
  }
}
