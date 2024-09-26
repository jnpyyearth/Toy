import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-supplier-report',
  templateUrl: './supplier-report.component.html',
  styleUrl: './supplier-report.component.css'
})
export class SupplierReportComponent {
  restockReport: any = null;
  selectedMonth: number | null = null; // Allow "null" for Every Month
  selectedYear: number = new Date().getFullYear(); // Default to current year
  months = [
    { value: 1, name: 'January' },
    { value: 2, name: 'February' },
    { value: 3, name: 'March' },
    { value: 4, name: 'April' },
    { value: 5, name: 'May' },
    { value: 6, name: 'June' },
    { value: 7, name: 'July' },
    { value: 8, name: 'August' },
    { value: 9, name: 'September' },
    { value: 10, name: 'October' },
    { value: 11, name: 'November' },
    { value: 12, name: 'December' },
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getRestockReport(); // Load report on init
  }

  getRestockReport(): void {
    const params: any = { year: this.selectedYear };

    // Only add the month parameter if a specific month is selected
    if (this.selectedMonth) {
      params.month = this.selectedMonth;
    }

    this.http.get('http://localhost:3001/api/restock_report', { params }).subscribe(
      (data: any) => {
        this.restockReport = data;
      },
      (error) => {
        console.error('Error fetching restock report:', error);
      }
    );
  }

  getTotalRestockPrice(): number {
    return this.restockReport.allRestocks.reduce((sum: number, restock: any) => {
      return sum + restock.Restock_Total_Price;
    }, 0);
  }

  filterEveryMonth(): void {
    this.selectedMonth = null; // Set selectedMonth to null to represent "Every Month"
    this.getRestockReport();   // Call the function to fetch the report
  }

}
