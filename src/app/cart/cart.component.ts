
// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../cart.service';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css'],
// })
// export class CartComponent implements OnInit {
//   cartItems: any[] = [];

//   constructor(private cartService: CartService) {}

//   ngOnInit(): void {
//     this.cartItems = this.cartService.getCartItems();
//   }



//   checkout(): void {
//     this.cartService.checkOut();
//   }

//   clearCart(): void {
//     this.cartService.clearCart();
//     this.cartItems = [];
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../cart.service';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css'],
// })
// export class CartComponent implements OnInit {
//   cartItems: any[] = [];

//   constructor(private cartService: CartService) {}

//   ngOnInit(): void {
//     this.cartItems = this.cartService.getCartItems();
//   }

//   checkout(): void {
//     this.cartService.checkOut();
//   }

//   clearCart(): void {
//     this.cartService.clearCart();
//     this.cartItems = [];
//   }

//   // Calculate the total quantity of items in the cart
//   getTotalQuantity(): number {
//     return this.cartItems.reduce((total, item) => total + item.Quantity, 0);
//   }

//   // Calculate the total price of items in the cart
//   getTotalPrice(): number {
//     return this.cartItems.reduce((total, item) => total + item.price * item.Quantity, 0);
//   }

//   // Method to update the cart with new quantity
//   updateCart(item: any): void {
//     const updatedItem = this.cartItems.find(cartItem => cartItem.product_id === item.product_id);
//     if (updatedItem) {
//       updatedItem.Quantity = item.Quantity; // Update the quantity in the cart
//       console.log('Cart updated:', this.cartItems);
//     }
//   }
// }


import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  checkout(): void {
    this.cartService.checkOut();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  // Calculate the total quantity of items in the cart
  getTotalQuantity(): number {
    return this.cartItems.reduce((total, item) => total + item.Quantity, 0);
  }

  // Calculate the total price of items in the cart
  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.Quantity, 0);
  }

  // Method to update the cart with new quantity
  updateCart(item: any): void {
    const updatedItem = this.cartItems.find(cartItem => cartItem.product_id === item.product_id);
    if (updatedItem) {
      updatedItem.Quantity = item.Quantity; // Update the quantity in the cart
      console.log('Cart updated:', this.cartItems);
    }
  }

  // Method to delete an item from the cart
  deleteFromCart(item: any): void {
    this.cartService.deleteFromCart(item.product_id); // Remove item from the cart
    this.cartItems = this.cartService.getCartItems(); // Update the cart items
    console.log('Item removed from cart:', item);
  }
}
