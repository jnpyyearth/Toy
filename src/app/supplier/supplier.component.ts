import { Component } from '@angular/core';

interface Supplier {
  date: string;
  name: string;
  amount: number;
}

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrl: './supplier.component.css'
})
export class SupplierComponent {
  suppliers: Supplier[] = [];
  totalAmount: number = 0;

  supplierDate: string = '';
  supplierName: string = '';
  supplierAmount: number | null = null;
  Productname: string = '';
  Catagory: string = '';
  description: string = '';
  employee: string = '';

  addSupplier() {
    if (this.supplierDate && this.supplierName && this.supplierAmount !== null) {
      const newSupplier: Supplier = {
        date: this.supplierDate,
        name: this.supplierName,
        amount: this.supplierAmount,
      };
      
      // เพิ่มรายการใน array และอัปเดตยอดรวม
      this.suppliers.push(newSupplier);
      this.updateTotalAmount();

      // รีเซ็ตค่าของแบบฟอร์ม
      this.supplierDate = '';
      this.supplierName = '';
      this.Productname = '';
      this.Catagory = '';
      this.description = '';
      this.employee = '';
      this.supplierAmount = null;
    }
  }
  updateTotalAmount() {
    this.totalAmount = this.suppliers.reduce((sum, supplier) => sum + supplier.amount, 0);
  }

}
