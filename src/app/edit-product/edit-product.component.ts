import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent {
  products: any[] = [];
  searchQuery: string = ''; // Holds the value of the search input
  addProductForm: FormGroup;
  editProductId: number | null = null;

  gameCategories = [
    { id: 1, name: 'Card Game' },
    { id: 2, name: 'Board Game' },
    { id: 3, name: 'Figure & Model' },
  ];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.addProductForm = this.fb.group({
      category: [null, Validators.required],
      toyName: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(1)]],
      quantity: [null, [Validators.required, Validators.min(1)]],
      imgUrl: ['', Validators.required],
    });

    // Load products on component initialization
    this.loadProducts();
  }

  // Fetch products from the API
  loadProducts() {
    this.http.get<any[]>('http://localhost:3001/api/stock').subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error loading products:', error);
      }
    );
  }

  // Set editing state
  editProduct(productId: number) {
    this.editProductId = productId;
  }

  // Check if product is being edited
  isEditing(productId: number): boolean {
    return this.editProductId === productId;
  }

  // Get category name by ID
  getCategoryName(categoryId: number): string {
    const category = this.gameCategories.find((cat) => cat.id === categoryId);
    return category ? category.name : 'Unknown';
  }

  // Filter products based on search query
  filteredProducts(): any[] {
    if (!this.searchQuery) {
      return this.products;
    }

    const query = this.searchQuery.toLowerCase();
    return this.products.filter((product) => {
      const productName = product.Product_Name.toLowerCase();
      const categoryName = this.getCategoryName(
        product.Category_ID
      ).toLowerCase();
      return productName.includes(query) || categoryName.includes(query);
    });
  }

  // Submit the form to edit the product
  onSubmit(product: any) {
    const formData = {
      Category_ID: product.Category_ID, // Updated based on dropdown
      Product_Name: product.Product_Name,
      Description: product.Description,
      Product_Price: product.Product_Price,
      Quantity: product.Quantity,
      imgUrl: product.imgUrl,
    };

    this.http
      .put(
        `http://localhost:3001/api/stock/update/${product.Product_ID}`,
        formData
      )
      .subscribe(
        (response) => {
          console.log('Product updated successfully:', response);
          this.loadProducts(); // Reload products after update
          this.editProductId = null; // Exit editing mode
        },
        (error) => {
          console.error('Error updating product:', error);
        }
      );
  }

  deleteProduct(productId: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.http
        .delete(`http://localhost:3001/api/stock/delete/${productId}`)
        .subscribe(
          (response) => {
            console.log('Product deleted successfully:', response);
            this.loadProducts(); // Reload the product list after deletion
          },
          (error) => {
            console.error('Error deleting product:', error);
          }
        );
    }
  }
  restockProduct(productId: number) {
    this.router.navigate(['/restock', productId]);
  }
}