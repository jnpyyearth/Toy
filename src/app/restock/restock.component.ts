

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restock',
  templateUrl: './restock.component.html',
  styleUrls: ['./restock.component.css'],
})
export class RestockComponent implements OnInit {
  restockForm: FormGroup;
  products: any[] = []; // To hold all products
  suppliers: any[] = []; // To hold suppliers
  productId: number; // To store the current productId from the route

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute // To capture route parameters
  ) {
    // Initialize the form with form controls and validators
    this.restockForm = this.fb.group({
      productId: ['', Validators.required],
      categoryId: ['', Validators.required],
      supplierName: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      restockTotalPrice: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit() {
    // Get the productId from the route and load product details if provided
    this.route.params.subscribe(params => {
      this.productId = +params['productId']; // Use '+' to convert string to number
      this.loadProducts(() => {
        if (this.productId) {
          this.loadProductDetails(this.productId);
        }
      });
    });

    this.loadSuppliers();
  }

  // Method to load products
  loadProducts(callback?: () => void) {
    this.http.get<any[]>('http://localhost:3001/api/products').subscribe(
      (data) => {
        this.products = data;
        if (callback) {
          callback();
        }
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  // Method to load product details by productId
  loadProductDetails(productId: number) {
    const product = this.products.find(p => p.Product_ID === productId);
    if (product) {
      this.restockForm.patchValue({
        productId: product.Product_ID,
        categoryId: product.Category_ID,
      });
    }
  }

  // Method to load suppliers
  loadSuppliers() {
    this.http.get<any[]>('http://localhost:3001/api/supplier').subscribe(
      (data) => {
        this.suppliers = data;
      },
      (error) => {
        console.error('Error fetching suppliers:', error);
      }
    );
  }

  // Method to handle form submission
  onSubmit() {
    console.log(this.restockForm.value);  // Log form values
    console.log(this.restockForm.valid);  // Log form validity
    if (this.restockForm.valid) {
      const restockData = {
        Product_ID: this.restockForm.value.productId,
        Category_ID: this.restockForm.value.categoryId,
        Supplier_Name: this.restockForm.value.supplierName,
        Quantity: this.restockForm.value.quantity,
        Restock_Total_Price: this.restockForm.value.restockTotalPrice,
      };

      const userID = localStorage.getItem('userID');
      const masterId = userID;

      // Check if userID is available
      if (!masterId) {
        alert('User ID not found. Please log in again.');
        return;
      }
      

      // Make the HTTP POST request
      this.http
        .post(`http://localhost:3001/api/restock_supplier/${masterId}`, restockData)
        .subscribe({
          next: (response) => {
            console.log('Restock successful', response);
            alert('Restock successful');
          },
          error: (error) => {
            console.error('Error during restock:', error); // Log the complete error object
            alert(`Error during restock: ${error.message || error.statusText}`);
          },
        });
    } else {
      alert('Please fill in all required fields.');
    }
  }
}


