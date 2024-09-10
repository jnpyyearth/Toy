import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-ownner',
  templateUrl: './sidebar-ownner.component.html',
  styleUrls: ['./sidebar-ownner.component.css'] 
})
export class SidebarOwnnerComponent {
  isOpen = false;

  toggleSidebar1() {
    this.isOpen = !this.isOpen;
    console.log('Sidebar isOpen: ', this.isOpen);
  }
  

}
