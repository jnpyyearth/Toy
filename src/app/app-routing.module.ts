import { Component, NgModule } from '@angular/core';
import { mapToCanActivate, RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { LogOutComponent } from './log-out/log-out.component';
import { SettingComponent } from './setting/setting.component';
import { BoardgameComponent } from './boardgame/boardgame.component';
import { CardgameComponent } from './cardgame/cardgame.component';
import { FigureModelComponent } from './figure-model/figure-model.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddProductComponent } from './Ownner/add-product/add-product.component';
import { SidebarOwnnerComponent } from './Ownner/sidebar-ownner/sidebar-ownner.component';
import { AddEmployeeComponent } from './Ownner/add-employee/add-employee.component';
import { SupplierComponent } from './supplier/supplier.component';
import { SaleReportComponent } from './sale-report/sale-report.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FooterComponent } from './footer/footer.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { RestockComponent } from './restock/restock.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { SupplierReportComponent } from './supplier-report/supplier-report.component';
import { AuthGuard } from './auth/auth.guard';








const routes: Routes = [
  { path: '', redirectTo: 'log-in', pathMatch: 'full' },
  { path : 'log-in', component: LogInComponent},
  { path: 'home', component: HomeComponent }, 
  { path: 'about-us', component: AboutUsComponent},
  { path: 'inventory', component: InventoryComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'cart', component: CartComponent},
  { path : 'account', component: AccountComponent},
  { path : 'log-out', component: LogOutComponent},
  { path : 'setting', component: SettingComponent},
  { path : 'boardgame', component: BoardgameComponent},
  { path : 'cardgame', component: CardgameComponent},
  { path : 'figure-model', component: FigureModelComponent},
  { path: 'product/:id', component: ProductDetailComponent },
  { path : 'navbar', component: NavbarComponent},
  { path : 'register', component: RegisterComponent},
  { path : 'sidebar', component: SidebarComponent},
  { path : 'add-product',component : AddProductComponent, canActivate: [AuthGuard], data: { roles: ['manager','employee']}},
  { path : 'sidebar-ownner',component : SidebarOwnnerComponent},
  { path : 'add-employee',component : AddEmployeeComponent, canActivate: [AuthGuard], data: { roles: ['manager','employee']}},
  { path : 'supplier',component : SupplierComponent, canActivate: [AuthGuard], data: { roles: ['manager','employee']}},
  { path : 'sale-report',component : SaleReportComponent, canActivate: [AuthGuard], data: { roles: ['manager','employee']}},
  { path : 'edit-product',component : EditProductComponent, canActivate: [AuthGuard], data: { roles: ['manager','employee']}},
  { path: 'edit-product/:id', component: UpdateStockComponent, canActivate: [AuthGuard], data: { roles: ['manager','employee']}},
  { path : 'product-detail',component : ProductDetailComponent},
  { path: 'restock/:productId', component: RestockComponent, canActivate: [AuthGuard], data: { roles: ['manager','employee']}},
  { path : 'footer',component : FooterComponent},
  { path : 'add-supplier',component : AddSupplierComponent, canActivate: [AuthGuard], data: { roles: ['manager','employee']}},
  { path : 'supplier-report',component : SupplierReportComponent, canActivate: [AuthGuard], data: { roles: ['manager','employee']}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
