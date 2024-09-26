import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Add this import
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LogInComponent } from './log-in/log-in.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { LogOutComponent } from './log-out/log-out.component';
import { Test1Component } from './test1/test1.component';
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
import { RouterModule } from '@angular/router';
import { SupplierComponent } from './supplier/supplier.component';
import { SaleReportComponent } from './sale-report/sale-report.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FooterComponent } from './footer/footer.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { RestockComponent } from './restock/restock.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { SupplierReportComponent } from './supplier-report/supplier-report.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    InventoryComponent,
    ContactUsComponent,
    LogInComponent,
    CartComponent,
    AccountComponent,
    LogOutComponent,
    Test1Component,
    SettingComponent,
    BoardgameComponent,
    CardgameComponent,
    FigureModelComponent,
    NavbarComponent,
    RegisterComponent,
    SidebarComponent,
    AddProductComponent,
    SidebarOwnnerComponent,
    AddEmployeeComponent,
    SupplierComponent,
    SaleReportComponent,
    ProductDetailComponent,
    EditProductComponent,
    FooterComponent,
    UpdateStockComponent,
    RestockComponent,
    AddSupplierComponent,
    SupplierReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,  // Add this to the imports array
    RouterModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(), provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
