import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

//Import el modulo de routing
import { AppRoutingModule } from './app-routing/app-routing.module';

//import el servicio HTTP
import { HttpService } from "./services/http.service";

//FILTER
import { FilterPipeModule } from 'ngx-filter-pipe';

//COMPONENTS
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ViewProductComponent } from './view-product/view-product.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    ShoppingCartComponent,
    CatalogComponent,
    ViewProductComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    FilterPipeModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
