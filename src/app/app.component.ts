
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'noodlestoreProject';
  showNavbar = false;
  showSpecialNavbar = false;

  // showSideNav = false;

  // constructor(private router: Router) {
  //   this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationEnd) {
  //       const currentRoute = event.url;
  //       const role = localStorage.getItem('role');
  //       if (role === 'manager,employee') {
  //         this.showNavbar = false;
  //         this.showSpecialNavbar = false;
  //       }



        // Hide both navbars for specific routes
        // if (currentRoute === '/log-in' || currentRoute === '/register' || currentRoute === '/register-master') {
        //   this.showNavbar = false;
        //   this.showSpecialNavbar = false;
        // } else if (currentRoute === '/user-master' || currentRoute === '/register-master') {
        //   // Show special navbar and hide the normal navbar
        //   this.showNavbar = false;
        //   this.showSpecialNavbar = true;
        // } else if (currentRoute === '/register-master' || currentRoute === '/home' || currentRoute === '/boardgame' || currentRoute === '/figure-model' || currentRoute === '/cardgame') {
        //   // Show normal navbar and hide the special navbar
        //   this.showNavbar = true;
        //   this.showSpecialNavbar = false;
        // } else {
        //   // For any routes, hide both navbars by default
        //   this.showNavbar = false;
        //   this.showSpecialNavbar = false;
        // }
    //   }
    // });
  // }
}
