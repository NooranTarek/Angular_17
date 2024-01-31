import { Routes } from '@angular/router';
import { FragrancesComponent } from './fragrances/fragrances.component';
import { NavbarComponent } from './navbar/navbar.component.js';
import { SmartphonesComponent } from './smartphones/smartphones.component.js';
import { LaptopsComponent } from './laptops/laptops.component.js';
import { SkincareComponent } from './skincare/skincare.component.js';
import { NotFoundComponent } from './not-found/not-found.component.js';
import { HomeDecorationsComponent } from './home-decorations/home-decorations.component.js';
import { GroceriesComponent } from './groceries/groceries.component.js';
import { ProductsDetailsComponent } from './products-details/products-details.component.js';
import { ShowProductDetailsComponent } from './show-product-details/show-product-details.component.js';
import { LoginComponent } from './login/login.component.js';
import { RegisterComponent } from './register/register.component.js';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component.js';

export const routes: Routes = [
  {
    path: '',
    component: ProductsDetailsComponent,
    title: 'products List page',
  },
  {
    path: 'smartphones',
    component: SmartphonesComponent,
    title: 'smartphones page',
  },
  {
    path: 'laptops',
    component: LaptopsComponent,
    title: 'laptops page',
  },
  {
    path: 'skincare',
    component: SkincareComponent,
    title: 'skincare page',
  },
  {
    path: 'fragrancest',
    component: FragrancesComponent,
    title: 'fragrancest page',
  },
  {
    path: 'homeDecoration',
    component: HomeDecorationsComponent,
    title: 'home decoration page',
  },
  {
    path: 'groceries',
    component: GroceriesComponent,
    title: 'groceries page',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'login page',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'register page',
  },
  {
    path: 'productDetails/:id',
    component: ShowProductDetailsComponent,
    title: 'product details page',
  },
  {
    path: 'shoppingCart',
    component: ShoppingCartComponent,
    title: 'shopping cart page',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
