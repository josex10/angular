import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importanto nuestros componentes
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { CatalogComponent } from '../catalog/catalog.component';
import { ViewProductComponent } from '../view-product/view-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'catalog', pathMatch: 'full' },
      { path: 'catalog', component: CatalogComponent },
      { path: 'viewProduct', component: ViewProductComponent },
      { path: 'shoppingCart', component: ShoppingCartComponent }
    ]
  }
];

/*

{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dash', component: DashComponent,
    children: [
      { path: '', redirectTo: 'catalogo', pathMatch: 'full' },
      { path: 'catalogo', component: CatalogoComponent },
      { path: 'detalleitem', component: DetalleitemComponent },
      { path: 'carrito', component: CarritoComponent },
      { path: 'menuBar', component: MenubarComponent }
    ]
  }

  */

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
