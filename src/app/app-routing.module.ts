import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'dashboard',
    loadChildren: ()=> import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
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
    loadChildren: ()=> import('./auth/login/login.module').then((m)=> m.LoginModule)    
  },
  //Wild Card Route for 404 request
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
