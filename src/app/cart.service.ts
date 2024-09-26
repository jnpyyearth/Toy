// // import { Injectable } from '@angular/core';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class CartService {

// //   constructor() { }
// // }


// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class CartService {
//   private cartItems: any[] = [];

//   constructor(private http: HttpClient) {}

//   addToCart(game: any): void {
//     this.cartItems.push(game);
//   }

//   getCartItems(): any[] {
//     return this.cartItems;
//   }

//   checkOut(): void {
//     const customerId = localStorage.getItem('customerID');
//     const products = this.cartItems.map((item) => ({
//       Product_ID: item.product_id,
//       Quantity: item.Quantity || 1,
//     }));

//     const orderData = {
//       Customer_ID: customerId,
//       Products: products,
//     };

//     console.log('Order Data:', orderData);

//     this.http
//       .post('http://localhost:3001/api/checkout', orderData, {
//         responseType: 'text',
//       })
//       .subscribe(
//         (response) => {
//           console.log('Order placed successfully', response);
//           this.clearCart(); // Clear the cart after successful order
//           console.log('Cart cleared:', this.cartItems); // Log to confirm
//         },
//         (error) => {
//           console.error('Error during checkout:', error);
//           if (error.error) {
//             console.error('Error details:', error.error); // Display detailed error message if available
//           }
//         }
//       );
//   }

//   clearCart(): void {
//     this.cartItems = [];
//   }
// }



import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];

  constructor(private http: HttpClient) {} // Inject HttpClient

  addToCart(game: any, quantity: number = 1): void {
    const existingItem = this.cartItems.find(item => item.product_id === game.product_id);
    if (existingItem) {
      existingItem.Quantity += quantity; // Increase the quantity by the selected amount
    } else {
      this.cartItems.push({ ...game, Quantity: quantity }); // Add with the selected quantity
    }
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  // Checkout method to send order data to the backend
  checkOut(): void {
    const customerId = localStorage.getItem('customerID');
    const products = this.cartItems.map((item) => ({
      Product_ID: item.product_id,
      Quantity: item.Quantity || 1,
    }));

    const orderData = {
      Customer_ID: customerId,
      Products: products,
    };

    console.log('Order Data:', orderData);

    this.http
      .post('http://localhost:3001/api/checkout', orderData, {
        responseType: 'text',
      })
      .subscribe(
        (response) => {
          console.log('Order placed successfully', response);
          this.clearCart();
          console.log('Cart cleared:', this.cartItems);
          alert('Order placed successfully!');
        },
        (error) => {
          console.error('Error during checkout:', error);
          if (error.error) {
            console.error('Error details:', error.error);
          }
        }
      );
  }

  clearCart(): void {
    this.cartItems = [];
  }

  // Method to delete an item from the cart
  deleteFromCart(productId: any): void {
    this.cartItems = this.cartItems.filter(item => item.product_id !== productId);
  }
}