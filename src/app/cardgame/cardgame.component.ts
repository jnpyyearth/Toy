// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { CartService } from '../cart.service';

// @Component({
//   selector: 'app-cardgame',
//   templateUrl: './cardgame.component.html',
//   styleUrls: ['./cardgame.component.css'],
// })
// export class CardgameComponent implements OnInit {
//   games: any[] = [];
//   searchQuery: string = '';

//   constructor(private http: HttpClient, private cartService: CartService) {}

//   ngOnInit(): void {
//     this.fetchGames(1);
//   }

//   fetchGames(categoryId: number): void {
//     const url = `http://localhost:3001/api/product?Category_ID=${categoryId}`;

//     this.http.get<any[]>(url).subscribe(
//       (data) => {
//         this.games = data.map((game) => ({
//           product_id: game.Product_ID,
//           name: game.Product_Name,
//           price: game.Product_Price,
//           description: game.Description,
//           image: game.imgUrl,
//         }));
//       },
//       (error) => {
//         console.error('Error fetching games:', error);
//       }
//     );
//   }

//   filteredGames(): any[] {
//     if (!this.searchQuery) {
//       return this.games;
//     }
//     const query = this.searchQuery.toLowerCase();
//     return this.games.filter(
//       (game) =>
//         game.name.toLowerCase().includes(query) ||
//         game.description.toLowerCase().includes(query)
//     );
//   }

//   addToCart(game: any): void {
//     this.cartService.addToCart(game);
//     console.log('Added to cart:', game);
//   }

//   handleSearch(query: string): void {
//     this.searchQuery = query;
//   }
// }



import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cardgame',
  templateUrl: './cardgame.component.html',
  styleUrls: ['./cardgame.component.css'],
})
export class CardgameComponent implements OnInit {
  games: any[] = []; // Initially an empty array
  cartItems: any[] = [];
  searchQuery: string = ''; // Variable to hold the search query

  constructor(private http: HttpClient, private cartService: CartService) {}

  ngOnInit(): void {
    this.fetchGames(1); // Fetch games with Category_ID = 6
  }

  fetchGames(categoryId: number): void {
    const url = `http://localhost:3001/api/product?Category_ID=${categoryId}`;

    this.http.get<any[]>(url).subscribe(
      (data) => {
        this.games = data.map((game) => ({
          product_id: game.Product_ID,
          name: game.Product_Name,
          price: game.Product_Price,
          description: game.Description,
          image: game.imgUrl,
          quantity: null, // Add a quantity field to each game object
        }));
      },
      (error) => {
        console.error('Error fetching games:', error);
      }
    );
  }

  addToCart(game: any): void {
    const quantity = game.quantity || 1; // Use selected quantity or default to 1
    this.cartService.addToCart(game, quantity); // Pass quantity to the CartService
    console.log('Added to cart:', game); // Logs added game details
  }

  // Method to filter games based on search query
  filteredGames(): any[] {
    if (!this.searchQuery) {
      return this.games; // If no search query, return all games
    }
    const query = this.searchQuery.toLowerCase();
    return this.games.filter(
      (game) =>
        game.name.toLowerCase().includes(query) ||
        game.description.toLowerCase().includes(query)
    );
  }
}