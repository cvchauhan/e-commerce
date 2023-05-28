import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { MainComponent } from './main/main.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './page/cart/cart.component';
import { WishlistComponent } from './page/wishlist/wishlist.component';
import { CheckoutComponent } from './page/checkout/checkout.component';
import { CategoryComponent } from './page/category/category.component';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { LoginComponent } from './auth/login/login.component';
import { ProductComponent } from './page/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    PagenotfoundComponent,
    DashboardComponent,
    CartComponent,
    WishlistComponent,
    CheckoutComponent,
    CategoryComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
