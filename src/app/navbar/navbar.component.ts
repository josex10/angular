import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private producto : Producto = {nombre : "", cantidad : 0, precio : 0, imagen : ""};
  private productos : Producto[];

  constructor(private _DataService : DataService) { }

  ngOnInit() {
    this.productos = this._DataService.fnObtenerCarritoDeCompras();
  }

}
