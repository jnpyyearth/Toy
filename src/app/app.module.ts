import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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
    FigureModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
