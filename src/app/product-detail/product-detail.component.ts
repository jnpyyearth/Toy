
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private cartService: CartService) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.fetchProductDetails(productId);
  }

  fetchProductDetails(productId: string): void {
    const url = `http://localhost:3001/api/products/${productId}`;
    this.http.get<any>(url).subscribe(
      (data) => {
        console.log('Fetched product data:', data); // Log for debugging
        this.product = {
          product_id: data.Product_ID,
          name: data.Product_Name,
          price: data.Product_Price,
          description: data.Description,
          image: data.imgUrl,
          quantity: null, // Initialize quantity field for the product
        };
      },
      (error) => {
        console.error('Error fetching product details:', error);
      }
    );
  }

  addToCart(product: any): void {
    const quantity = product.quantity || 1; // Default to 1 if no quantity is set
    this.cartService.addToCart(product, quantity);
    console.log('Added to cart:', product);
  }
}