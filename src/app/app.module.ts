import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LogInComponent } from './log-in/log-in.component';
// import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { LogOutComponent } from './log-out/log-out.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { RegisterMasterComponent } from './register-master/register-master.component';

import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { UserServiceComponent } from './user-service/user-service.component';
import { UserMasterComponent } from './user-master/user-master.component';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserPaymentInfoComponent } from './user-payment-info/user-payment-info.component';
import { FigureModelComponent } from './figure-model/figure-model.component';
import { CardgameComponent } from './cardgame/cardgame.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddProductComponent } from './add-product/add-product.component';
import { BoardgameComponent } from './boardgame/boardgame.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { SettingComponent } from './setting/setting.component';
import { RestockComponent } from './restock/restock.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AboutUsComponent,
    InventoryComponent,
    ContactUsComponent,
    LogInComponent,
    CartComponent,
    AccountComponent,
    LogOutComponent,
    RegisterComponent,
    UnauthorizedComponent,
    RegisterMasterComponent,
    UserServiceComponent,
    UserMasterComponent,
    ProductComponent,
    DashboardComponent,
    UserPaymentInfoComponent,
    FigureModelComponent,
    CardgameComponent,
    SidebarComponent,
    AddProductComponent,
    BoardgameComponent,
    UpdateStockComponent,
    EditProductComponent,
    PaymentComponent,
    SettingComponent,
    RestockComponent,
    NavbarComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

  ],
  providers: [provideHttpClient(), provideClientHydration(), AuthGuard, AuthService],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule { }
