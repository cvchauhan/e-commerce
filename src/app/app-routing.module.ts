import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './page/cart/cart.component';
import { WishlistComponent } from './page/wishlist/wishlist.component';
import { CheckoutComponent } from './page/checkout/checkout.component';
import { CategoryComponent } from './page/category/category.component';
import { LoginComponent } from './auth/login/login.component';
import { ContactComponent } from './page/contact/contact.component';
import { AboutComponent } from './page/about/about.component';
import { ProductComponent } from './page/product/product.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'cart',    
    loadChildren: ()=> import('./page/cart/cart.module').then((m) => m.CartModule)
  },
  {
    path: 'wishlist',
    loadChildren: ()=> import('./page/wishlist/wishlist.module').then((m) => m.WishlistModule)
  },
  {
    path: 'checkout',
    loadChildren: ()=> import('./page/checkout/checkout.module').then((m) => m.CheckoutModule)
  },
  {
    path: 'category',
    loadChildren: ()=> import('./page/category/category.module').then((m) => m.CategoryModule)
  },
  {
    path: 'about',
    loadChildren: ()=> import('./page/about/about.module').then((m) => m.AboutModule)
  },
  {
    path: 'contact',
    loadChildren: ()=> import('./page/contact/contact.module').then((m) => m.ContactModule)
  },
  {
    path: 'product',
    loadChildren: ()=> import('./page/product/product.module').then((m) => m.ProductModule)
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  //Wild Card Route for 404 request
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
