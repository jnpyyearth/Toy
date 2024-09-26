// import { Component, Output, EventEmitter } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { SidebarService } from '../sidebar.service';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrl: './navbar.component.css',
// })
// export class NavbarComponent {
//   [x: string]: any;
//   games: any[] = []; // Initially an empty array
//   // cartItems: any[] = [];
//   @Output() search: EventEmitter<string> = new EventEmitter<string>();
//   searchQuery: string = ''; 

//   isOpen = false;

//   constructor(private  sidebarService: SidebarService, private http: HttpClient) {
//     // Subscribe เพื่อติดตามสถานะของ sidebar
//     this.sidebarService.sidebarOpen$.subscribe((isOpen) => {
//       this.isOpen = isOpen;
//     });

//   }

//   toggleSidebar() {
//     this.isOpen = !this.isOpen;
//     localStorage.setItem('sidebarOpen', this.isOpen.toString());
//   }

//   ngOnInit(): void {
//     this.fetchGames(); // ดึงข้อมูลสินค้าเมื่อโหลดหน้า
//   }

//   // ฟังก์ชันดึงข้อมูลสินค้า
//   fetchGames(): void {
//     const url = `http://localhost:3001/api/product_test`;

//     this.http.get<any[]>(url).subscribe(
//       (data) => {
//         this.games = data.map((game) => ({
//           product_id: game.Product_ID,
//           name: game.Product_Name,
//           price: game.Product_Price,
//           description: game.Description,
//           image: game.imgUrl,
//           quantity: null, 
//         }));
//       },
//       (error) => {
//         console.error('Error fetching games:', error);
//       }
//     );
//   }

//   // ฟังก์ชันกรองสินค้า
//   filteredGames(): any[] {
//     if (!this.searchQuery) {
//       return this.games; // หากไม่มีคำค้นหาคืนค่าสินค้าทั้งหมด
//     }
//     const query = this.searchQuery.toLowerCase();
//     return this.games.filter(
//       (game) =>
//         game.name.toLowerCase().includes(query) || // ค้นหาจากชื่อสินค้า
//         game.description.toLowerCase().includes(query) // ค้นหาจากคำอธิบาย
//     );
//   }

//   onSearch(event: Event): void {
//     event.preventDefault(); // Prevent page reload
//     this.search.emit(this.searchQuery); // Emit the search query
//   }

// }



import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  searchQuery: string = '';

  isOpen = false;

  constructor(private sidebarService: SidebarService, private http: HttpClient) {
    this.sidebarService.sidebarOpen$.subscribe((isOpen) => {
      this.isOpen = isOpen;
    });
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
    localStorage.setItem('sidebarOpen', this.isOpen.toString());
  }

  onSearch(event: Event): void {
    event.preventDefault(); // Prevent page reload
    this.search.emit(this.searchQuery); // Emit the search query
  }
}
