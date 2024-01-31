import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component.js';
import { ProductsComponent } from './products/products.component.js';
import { ProductsDetailsComponent } from './products-details/products-details.component.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,ProductsComponent,ProductsDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-CommerceApp';
}
