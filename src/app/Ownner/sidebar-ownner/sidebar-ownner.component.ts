import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-ownner',
  templateUrl: './sidebar-ownner.component.html',
  styleUrls: ['./sidebar-ownner.component.css'] 
})
export class SidebarOwnnerComponent {
  isOpen = false; 

  toggleSidebar() {
      this.isOpen = !this.isOpen; 
  }


}
