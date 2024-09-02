import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  ngOnInit(): void {
    this.showMenu('nav-toggle', 'navbar', 'body-pd');
    this.initLinkActive();
    this.initCollapseMenu();
  }

  showMenu(toggleId: string, navbarId: string, bodyId: string): void {
    const toggle = document.getElementById(toggleId);
    const navbar = document.getElementById(navbarId);
    const bodypadding = document.getElementById(bodyId);

    if (toggle && navbar) {
      toggle.addEventListener('click', () => {
        navbar.classList.toggle('expander');
        bodypadding?.classList.toggle('body-pd');
      });
    }
  }

  initLinkActive(): void {
    const linkColor = document.querySelectorAll('.nav__link');
    function colorLink(this: HTMLElement): void {
      linkColor.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    }
    linkColor.forEach(l => l.addEventListener('click', colorLink));
  }

  initCollapseMenu(): void {
    const linkCollapse = document.getElementsByClassName('collapse__link') as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < linkCollapse.length; i++) {
      linkCollapse[i].addEventListener('click', function(this: HTMLElement) {
        const collapseMenu = this.nextElementSibling as HTMLElement;
        collapseMenu.classList.toggle('showCollapse');

        const rotate = collapseMenu.previousElementSibling as HTMLElement;
        rotate.classList.toggle('rotate');
      });
    }
  }
}

