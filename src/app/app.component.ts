
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'noodlestoreProject';
  showNavbar = true;
  showSpecialNavbar = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.url;

        // Hide both navbars for specific routes
        if (currentRoute === '/log-in' || currentRoute === '/register') {
          this.showNavbar = false;
          this.showSpecialNavbar = false;
        } else if (currentRoute === '/cardgame' || currentRoute === '/user-master') {
          // Show special navbar and hide the normal navbar
          this.showNavbar = false;
          this.showSpecialNavbar = true;
        } else if (currentRoute === '/register-master' || currentRoute === '/home') {
          // Show normal navbar and hide the special navbar
          this.showNavbar = true;
          this.showSpecialNavbar = false;
        } else {
          // For any routes, hide both navbars by default
          this.showNavbar = false;
          this.showSpecialNavbar = false;
        }
      }
    });
  }
}
