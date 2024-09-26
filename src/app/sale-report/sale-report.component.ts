// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-sale-report',
//   templateUrl: './sale-report.component.html',
//   styleUrl: './sale-report.component.css',
// })
// export class SaleReportComponent {
//   orders: any[] = []; // All fetched orders
//   filteredOrders: any[] = []; // Orders filtered by month or "Every Month"
//   totalSales: number = 0; // Total sales for the selected month or year
//   error: string | null = null;

//   bestSales: any[] = []; // Best sale data (best-selling products)
//   leastSales: any[] = []; // Least sale data (least-selling products)
//   bestSaleError: string | null = null;

//   selectedMonth: string | null = ''; // Selected month (1-12) or null for "Every Month"
//   selectedYear: string = new Date().getFullYear().toString(); // Default to the current year

//   months = [
//     { label: 'January', value: '01' },
//     { label: 'February', value: '02' },
//     { label: 'March', value: '03' },
//     { label: 'April', value: '04' },
//     { label: 'May', value: '05' },
//     { label: 'June', value: '06' },
//     { label: 'July', value: '07' },
//     { label: 'August', value: '08' },
//     { label: 'September', value: '09' },
//     { label: 'October', value: '10' },
//     { label: 'November', value: '11' },
//     { label: 'December', value: '12' },
//   ];

//   years: string[] = ['2022', '2023', '2024']; // Example years for selection

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     // Fetch all orders
//     this.http.get<any[]>('http://localhost:3001/api/orders').subscribe({
//       next: (data) => {
//         this.orders = data;
//         this.filterEveryMonth(); // Initialize with "Every Month" for the current year
//       },
//       error: (err) => (this.error = 'Error fetching orders'),
//     });

//     this.http.get<any[]>('http://localhost:3001/api/best_sale').subscribe({
//       next: (data) => {
//         this.bestSales = data;
//       },
//       error: (err) => (this.bestSaleError = 'Error fetching best sale info'),
//     });

//     // Calculate most and least sold products
//     this.calculateMostAndLeastSold();
//   }

//   // Filter orders by selected month and year
//   filterByMonth(): void {
//     if (!this.selectedMonth || !this.selectedYear) return;

//     // Filter the orders by the selected month and year
//     this.filteredOrders = this.orders.filter((order) => {
//       const orderDate = new Date(order.Order_Date);
//       const month = ('0' + (orderDate.getMonth() + 1)).slice(-2); // Get month in 'MM' format
//       const year = orderDate.getFullYear().toString();
//       return month === this.selectedMonth && year === this.selectedYear;
//     });

//     // Calculate total sales for the filtered orders
//     this.totalSales = this.filteredOrders.reduce(
//       (total, order) => total + order.Total_Price,
//       0
//     );
//   }

//   // Filter all orders by year (Every Month)
//   filterEveryMonth(): void {
//     this.selectedMonth = null; // Set to null to represent "Every Month"

//     // Filter only by year
//     this.filteredOrders = this.orders.filter((order) => {
//       const orderDate = new Date(order.Order_Date);
//       const year = orderDate.getFullYear().toString();
//       return year === this.selectedYear;
//     });

//     // Calculate total sales for the filtered orders
//     this.totalSales = this.filteredOrders.reduce(
//       (total, order) => total + order.Total_Price,
//       0
//     );
//     this.calculateMostAndLeastSold();
//   }

//   calculateMostAndLeastSold(): void {
//     const productMap = new Map<
//       string,
//       { totalQuantity: number; totalSales: number }
//     >();

//     this.filteredOrders.forEach((order) => {
//       if (productMap.has(order.Product_Name)) {
//         const product = productMap.get(order.Product_Name);
//         product!.totalQuantity += order.Quantity;
//         product!.totalSales += order.Total_Price;
//       } else {
//         productMap.set(order.Product_Name, {
//           totalQuantity: order.Quantity,
//           totalSales: order.Total_Price,
//         });
//       }
//     });

//     const productArray = Array.from(productMap.entries()).map(
//       ([Product_Name, data]) => ({
//         Product_Name,
//         Total_Quantity: data.totalQuantity,
//         Total_Sales: data.totalSales,
//       })
//     );

//     // Sort by total quantity sold
//     this.bestSales = productArray
//       .sort((a, b) => b.Total_Quantity - a.Total_Quantity)
//       .slice(0, 1); // Most sold product
//     this.leastSales = productArray
//       .sort((a, b) => a.Total_Quantity - b.Total_Quantity)
//       .slice(0, 1); // Least sold product
//   }

//   // Get the label for the selected month
//   get selectedMonthLabel(): string {
//     const monthObj = this.months.find(
//       (month) => month.value === this.selectedMonth
//     );
//     return monthObj ? monthObj.label : '';
//   }
//   filterAllInfo(): void {
//     this.selectedMonth = null; // Clear month filter
//     this.selectedYear = null; // Clear year filter

//     // Display all orders
//     this.filteredOrders = this.orders;

//     // Calculate total sales for all orders
//     this.totalSales = this.filteredOrders.reduce(
//       (total, order) => total + order.Total_Price,
//       0
//     );
//   }
// }




import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sale-report',
  templateUrl: './sale-report.component.html',
  styleUrl: './sale-report.component.css',
})
export class SaleReportComponent {
  
  orders: any[] = [];  // All fetched orders
  filteredOrders: any[] = [];  // Orders filtered by month or "Every Month"
  totalSales: number = 0;  // Total sales for the selected month or year
  error: string | null = null;

  // Best Sale Information
  bestSales: any[] = [];  // Best sale data (best-selling products)
  leastSales: any[] = []; // Least sale data (least-selling products)
  bestSaleError: string | null = null;

  selectedMonth: string | null = '';  // Selected month (1-12) or null for "Every Month"
  selectedYear: string = new Date().getFullYear().toString();  // Default to the current year

  months = [
    { label: 'January', value: '01' },
    { label: 'February', value: '02' },
    { label: 'March', value: '03' },
    { label: 'April', value: '04' },
    { label: 'May', value: '05' },
    { label: 'June', value: '06' },
    { label: 'July', value: '07' },
    { label: 'August', value: '08' },
    { label: 'September', value: '09' },
    { label: 'October', value: '10' },
    { label: 'November', value: '11' },
    { label: 'December', value: '12' }
  ];

  years: string[] = ['2022', '2023', '2024'];  // Example years for selection

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch all orders
    this.http.get<any[]>('http://localhost:3001/api/orders')
      .subscribe({
        next: (data) => {
          this.orders = data;
          this.filterEveryMonth();  // Initialize with "Every Month" for the current year
        },
        error: (err) => this.error = 'Error fetching orders'
      });

    // Fetch best sale information
    this.http.get<any[]>('http://localhost:3001/api/best_sale')
      .subscribe({
        next: (data) => {
          this.bestSales = data;
        },
        error: (err) => this.bestSaleError = 'Error fetching best sale info'
      });

    // Calculate most and least sold products
    this.calculateMostAndLeastSold();
  }

  // Filter orders by selected month and year
  filterByMonth(): void {
    if (!this.selectedMonth || !this.selectedYear) return;

    // Filter the orders by the selected month and year
    this.filteredOrders = this.orders.filter(order => {
      const orderDate = new Date(order.Order_Date);
      const month = ('0' + (orderDate.getMonth() + 1)).slice(-2);  // Get month in 'MM' format
      const year = orderDate.getFullYear().toString();
      return month === this.selectedMonth && year === this.selectedYear;
    });

    // Calculate total sales for the filtered orders
    this.totalSales = this.filteredOrders.reduce((total, order) => total + order.Total_Price, 0);

    // Recalculate most and least sold products
    this.calculateMostAndLeastSold();
  }

  // Filter all orders by year (Every Month)
  filterEveryMonth(): void {
    this.selectedMonth = null;  // Set to null to represent "Every Month"

    // Filter only by year
    this.filteredOrders = this.orders.filter(order => {
      const orderDate = new Date(order.Order_Date);
      const year = orderDate.getFullYear().toString();
      return year === this.selectedYear;
    });

    // Calculate total sales for the filtered orders
    this.totalSales = this.filteredOrders.reduce((total, order) => total + order.Total_Price, 0);

    // Recalculate most and least sold products
    this.calculateMostAndLeastSold();
  }

  // Get the label for the selected month
  get selectedMonthLabel(): string {
    const monthObj = this.months.find(month => month.value === this.selectedMonth);
    return monthObj ? monthObj.label : '';
  }

  // Calculate most and least sold products
  calculateMostAndLeastSold(): void {
    const productMap = new Map<string, { totalQuantity: number, totalSales: number }>();

    this.filteredOrders.forEach(order => {
      if (productMap.has(order.Product_Name)) {
        const product = productMap.get(order.Product_Name);
        product!.totalQuantity += order.Quantity;
        product!.totalSales += order.Total_Price;
      } else {
        productMap.set(order.Product_Name, {
          totalQuantity: order.Quantity,
          totalSales: order.Total_Price
        });
      }
    });

    const productArray = Array.from(productMap.entries())
      .map(([Product_Name, data]) => ({
        Product_Name,
        Total_Quantity: data.totalQuantity,
        Total_Sales: data.totalSales
      }));

    // Sort by total quantity sold
    this.bestSales = productArray.sort((a, b) => b.Total_Quantity - a.Total_Quantity).slice(0, 1);  // Most sold product
    this.leastSales = productArray.sort((a, b) => a.Total_Quantity - b.Total_Quantity).slice(0, 1);  // Least sold product
  }

  filterAllInfo(): void {
    this.selectedMonth = null;  // Clear month filter
    this.selectedYear = null;   // Clear year filter

    // Display all orders
    this.filteredOrders = this.orders;

    // Calculate total sales for all orders
    this.totalSales = this.filteredOrders.reduce((total, order) => total + order.Total_Price, 0);

    // Recalculate most and least sold products
    this.calculateMostAndLeastSold();
  }
}


