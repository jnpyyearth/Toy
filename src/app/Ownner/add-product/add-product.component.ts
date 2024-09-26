// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-add-product',
//   templateUrl: './add-product.component.html',
//   styleUrl: './add-product.component.css'
// })
// export class AddProductComponent {

// }


import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
declare var bootstrap: any;

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
[x: string]: any;
  addProductForm: FormGroup;

  gameCategories = [
    { id: 1, name: 'Card Game' },
    { id: 2, name: 'Board Game' },
    { id: 3, name: 'Figure & Model' }
  ];

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.addProductForm = this.fb.group({
      category: [null, Validators.required],
      toyName: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(1)]],
      quantity: [null, [Validators.required, Validators.min(1)]],
      imgUrl: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.addProductForm.valid) {
      const formData = {
        Category_ID: this.addProductForm.value.category,
        Product_Name: this.addProductForm.value.toyName,
        Description: this.addProductForm.value.description,
        Product_Price: this.addProductForm.value.price,
        Quantity: this.addProductForm.value.quantity,
        imgUrl: this.addProductForm.value.imgUrl
      };

      this.http.post('http://localhost:3001/api/product/add', formData).subscribe({
        next: (response) => {
          console.log('Product added successfully:', response);
          this.router.navigate(['/addproduct']);
          // this.router.navigate(['/products']);
        },
        error: (error) => {
          console.error('Error adding product:', error);
        }
      });
    } else {
      console.log('Form is not valid');
    }
  }
  
  showPopup() {
    Swal.fire("Add product success!!!");
  }
  
}