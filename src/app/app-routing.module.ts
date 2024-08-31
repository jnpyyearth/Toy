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

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'app', component: AppComponent }, 
  { path: 'home', component: HomeComponent }, 
  { path: 'menu', component: MenuComponent },
  { path: 'about-us', component: AboutUsComponent},
  { path: 'inventory', component: InventoryComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'cart', component: CartComponent},
  { path : 'account', component: AccountComponent},
  { path : 'log-out', component: LogOutComponent},
  { path : 'log-in', component: LogInComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
