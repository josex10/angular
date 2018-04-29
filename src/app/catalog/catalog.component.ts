//Librerias de angular
import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';
import { Input } from '@angular/core';

//Modelos
import { Producto } from '../models/producto';

//Servicios
import { HttpService } from '../services/http.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  private cantidadParaAgregar: number;
  private producto : Producto = {nombre : "", cantidad : 0, precio : 0, imagen : ""};
  private productosRecibidos : Producto[];
  private productos : Producto[];
  private mensajeDeError : string ="";

  productFilter: any = { nombre: '' };
  //cantidadParaAgregar : number;

  constructor(private _DataService : DataService, private _httpService : HttpService, private _Router: Router) { }

  ngOnInit() {
    this._httpService.getDatos()
      .subscribe(
        (data: Response) =>{
          this._DataService.fnSetProductosDB(data[1]);
          this.productos = this._DataService.fnGetProductosDB();
        } 
    )//./subcribe
  }// ./ngOnInit

  fnGoDetalleProducto(producto : Producto) {
    this._DataService.fnSetProductoParaVista(producto);
    this._Router.navigate(['/dashboard/viewProduct']);
  }

  fnAgregarProductoAlCarroDeCompras(producto : Producto, cantidad : number): void{
    this.mensajeDeError = "";
    if(producto.cantidad < cantidad){
      this.mensajeDeError = "No hay suficientes cantidades existentes en el inventario.";
    }else{
      this._DataService.fnAgregarProductoAlCarritoDeCompras(producto, cantidad);
      var carrito = this._DataService.fnObtenerCarritoDeCompras();
    } 
  }
}
