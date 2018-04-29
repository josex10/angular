import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from './http.service';
import 'rxjs/Rx';

//Importando los modelos
import { Usuario } from '../models/usuario';
import { Producto } from '../models/producto';

@Injectable()
export class DataService {
  private usuario : Usuario;
  private usuarios : Usuario[];

  private producto : Producto;
  private productos  : Producto[] = [];

  private productoVista : Producto;

  private carritoDeCompras : Producto[] = [];

  private data =[];  


  constructor(private _httpService : HttpService){}

  fnSetProductoParaVista(producto : Producto): void{
    this.productoVista = producto;
  }

  fnGetProductoParaVista(): Producto{
    return this.productoVista;
  }

  fnObtenerCarritoDeCompras(): Producto[]{
    return this.carritoDeCompras;
  }

  fnAgregarProductoAlCarritoDeCompras(producto : Producto, cantidad: number) : void{

    //Buscamos el producto en el carrito
    var BuscarProductoEnCarrito : number = this.fnBuscarProductoEnElCarritoDeComprasPorIndex(producto);

    //Validamos si obtuvimos el producto
    if(BuscarProductoEnCarrito < 0){
      var nuevoProducto : Producto = new Producto(producto.nombre, cantidad, producto.precio, producto.imagen
      );
      this.carritoDeCompras.push(nuevoProducto);  
    }else{
      this.carritoDeCompras[BuscarProductoEnCarrito].cantidad = Number(this.carritoDeCompras[BuscarProductoEnCarrito].cantidad) + Number(cantidad);
    }
    producto.cantidad = Number(producto.cantidad) - Number(cantidad);
  }

  fnLimpiarCarritoDeCompras(){
    this.carritoDeCompras.length = 0;
  }
  
  fnSetProductosDB(productos : Producto[]): void{
    this.productos = productos;
  }

  fnBuscarProductoEnElInventario(producto:Producto) : Producto{
    const resultado = this.productos.find( item => item.nombre === producto.nombre);
    return resultado;
  }

  fnBuscarProductoEnElCarritoDeCompras(producto:Producto) : Producto{
    const resultado = this.carritoDeCompras.find( item => item.nombre === producto.nombre);
    return resultado;
  }

  fnBuscarProductoEnElCarritoDeComprasPorIndex(producto:Producto) : number{
    const resultado = this.carritoDeCompras.findIndex( item => item.nombre === producto.nombre);
    return resultado;
  }

  fnGetProductosDB(): Producto[]{
    return this.productos;
  }

}
