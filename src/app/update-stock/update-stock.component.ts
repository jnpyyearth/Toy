

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-update-stock',
//   templateUrl: './update-stock.component.html',
//   styleUrls: ['./update-stock.component.css']
// })
// export class UpdateStockComponent implements OnInit {
//   updateForm: FormGroup;
//   private productId: number;
//   constructor(
//     private fb: FormBuilder,
//     private http: HttpClient,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {
//     this.updateForm = this.fb.group({
//       Product_Name: [{ value: '', disabled: true }],
//       Category_ID: [null, Validators.required],
//       Product_Price: [null, [Validators.required, Validators.min(0)]],
//       Description: [''],
//       imgUrl: [''],
//       Supplier_ID: [null, Validators.required],
//       Minimum_Value: [null, [Validators.required, Validators.min(0)]],
//       Quantity: [null, [Validators.required, Validators.min(0)]],
//     });
//   }

//   ngOnInit(): void {
//     this.productId = +this.route.snapshot.paramMap.get('id')!;
//     this.fetchProductDetails();
//   }

//   fetchProductDetails(): void {
//     this.http.get(`http://localhost:3001/api/stock/${this.productId}`).subscribe((data: any) => {
//       this.updateForm.patchValue(data);
//     });
//   }

//   onSubmit(): void {
//     if (this.updateForm.valid) {
//       this.http.put(`http://localhost:3001/api/stock/update/${this.productId}`, this.updateForm.value)
//         .subscribe(() => {
//           alert('Product and stock details updated successfully!');
//           this.router.navigate(['/update-product']); // Navigate to stock list or any other page
//         }, (error) => {
//           console.error('Error updating product and stock:', error);
//           alert('Failed to update product and stock details.');
//         });
//     }
//   }
// }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css']
})
export class UpdateStockComponent implements OnInit {
  updateForm: FormGroup;
  private productId: number;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.updateForm = this.fb.group({
      Product_Name: [{ value: '', disabled: true }],
      Category_ID: [null, Validators.required],
      Product_Price: [null, [Validators.required, Validators.min(0)]],
      Description: [''],
      imgUrl: [''],
      Supplier_ID: [null, Validators.required],
      Minimum_Value: [null, [Validators.required, Validators.min(0)]],
      Quantity: [null, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    this.productId = +this.route.snapshot.paramMap.get('id')!;
    this.fetchProductDetails();
  }

  fetchProductDetails(): void {
    this.http.get(`http://localhost:3001/api/stock/${this.productId}`).subscribe((data: any) => {
      this.updateForm.patchValue(data);
    });
  }

  onSubmit(): void {
    if (this.updateForm.valid) {
      this.http.put(`http://localhost:3001/api/stock/update/${this.productId}`, this.updateForm.value)
        .subscribe(() => {
          alert('Product and stock details updated successfully!');
          this.router.navigate(['/update-product']); // Navigate to stock list or any other page
        }, (error) => {
          console.error('Error updating product and stock:', error);
          alert('Failed to update product and stock details.');
        });
    }
  }
}
