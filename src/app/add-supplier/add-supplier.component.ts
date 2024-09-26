import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
interface Supplier {
  Supplier_ID: number;
  Supplier_Name: string;
  Supplier_Address: string;
  Email: string;
  Phone: string;
  editing?: boolean; // This property is for tracking the edit state
}

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrl: './add-supplier.component.css',
})
export class AddSupplierComponent {
  supplier = {
    Supplier_Name: '',
    Supplier_Address: '',
    Email: '',
    Phone: '',
  };
  suppliers: Supplier[] = [];

  isEditMode = false;
  supplierId: string;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.supplierId = this.route.snapshot.paramMap.get('id');
    if (this.supplierId) {
      this.isEditMode = true;
      this.getSupplierDetails(this.supplierId);
    }
    this.fetchSuppliers();
  }

  fetchSuppliers() {
    this.http.get<Supplier[]>('http://localhost:3001/api/supplier').subscribe(
      (data) => {
        this.suppliers = data;
      },
      (error) => {
        console.error('Error fetching suppliers:', error);
      }
    );
  }
  editSupplier(supplier: Supplier) {
    supplier.editing = true;
  }

  saveSupplier(supplier: Supplier) {
    this.http
      .put(
        `http://localhost:3001/api/supplier/${supplier.Supplier_ID}`,
        supplier
      )
      .subscribe(
        () => {
          supplier.editing = false;
          alert('Supplier updated successfully');
        },
        (error) => {
          console.error('Error updating supplier:', error);
          alert('Error updating supplier');
        }
      );
  }

  // Cancel editing
  cancelEdit(supplier: Supplier) {
    supplier.editing = false;
    // Optionally reload the supplier data from the server to undo unsaved changes
    this.fetchSuppliers();
  }

  getSupplierDetails(id: string): void {
    this.http
      .get(`http://localhost:3001/api/supplier/${id}`)
      .subscribe((data: any) => {
        this.supplier = data;
      });
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.updateSupplier();
    } else {
      this.addSupplier();
    }
  }

  addSupplier(): void {
    this.http
      .post('http://localhost:3001/api/supplier', this.supplier)
      .subscribe(
        () => {
          alert('Supplier added successfully');
          this.router.navigate(['/supplier-list']);
        },
        (error) => {
          console.error('Error adding supplier:', error);
          alert('Error adding supplier');
        }
      );
  }

  updateSupplier(): void {
    this.http
      .put(
        `http://localhost:3001/api/supplier/${this.supplierId}`,
        this.supplier
      )
      .subscribe(
        () => {
          alert('Supplier updated successfully');
          this.router.navigate(['/supplier-list']);
        },
        (error) => {
          console.error('Error updating supplier:', error);
          alert('Error updating supplier');
        }
      );
  }
}
