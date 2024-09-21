import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { LogOutComponent } from './log-out/log-out.component';
import { LogInComponent } from './log-in/log-in.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth/auth.guard';
import { RegisterMasterComponent } from './register-master/register-master.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { UserServiceComponent } from './user-service/user-service.component';
import { UserMasterComponent } from './user-master/user-master.component';
import { ProductComponent } from './product/product.component';
import { UserPaymentInfoComponent } from './user-payment-info/user-payment-info.component';
import { FigureModelComponent } from './figure-model/figure-model.component';
import { CardgameComponent } from './cardgame/cardgame.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddProductComponent } from './add-product/add-product.component';
import { BoardgameComponent } from './boardgame/boardgame.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { SettingComponent } from './setting/setting.component';
import { PaymentComponent } from './payment/payment.component';
import { RestockComponent } from './restock/restock.component';

const routes: Routes = [
  { path: '', redirectTo: 'log-in', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'menu',
    component: MenuComponent,
    canActivate: [AuthGuard],
    data: { roles: ['manager', 'employee'] },
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    canActivate: [AuthGuard],
    data: { roles: ['manager', 'employee', 'user'] },
  },
  { path: 'inventory', component: InventoryComponent },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    canActivate: [AuthGuard],
    data: { roles: ['manager', 'employee', 'user'] },
  },
  { path: 'cart', component: CartComponent },
  { path: 'account', component: AccountComponent },
  { path: 'log-out', component: LogOutComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'register-master', component: RegisterMasterComponent },
  { path: 'log-out', component: LogOutComponent },
  { path: 'user-service', component: UserServiceComponent },
  { path: 'user-master', component: UserMasterComponent },
  { path: 'product', component: ProductComponent },
  { path: 'user-payment-info', component: UserPaymentInfoComponent },
  { path: 'figure-model', component: FigureModelComponent },
  { path: 'cardgame', component: CardgameComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'boardgame', component: BoardgameComponent },
  { path: 'update-product/:id', component: UpdateStockComponent },
  { path: 'update-product', component: EditProductComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'restock/:productId', component: RestockComponent },

  { path: '**', redirectTo: 'home' }, // Catch-all route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
