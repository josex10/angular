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
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  private producto : Producto = {nombre : "", cantidad : 0, precio : 0, imagen : ""};
  private carritoDeCompras : Producto[];
  private total : number = 0;
  private productos : Producto[];
  private mensajeDePago : string;

  constructor(private _DataService : DataService, private _httpService : HttpService, private _Router: Router) { }

  ngOnInit() {
    this.carritoDeCompras = this._DataService.fnObtenerCarritoDeCompras();
    this.fnCalcularTotal();
  }

  fnCalcularTotal(){
    try{
      for(var i = 0; i < this.carritoDeCompras.length; i++){
        var subtotal = Number(this.carritoDeCompras[i].cantidad) * Number(this.carritoDeCompras[i].precio);
        console.log("SubTotal")
        console.log(subtotal);
        this.total = Number(this.total) + Number(subtotal);
        console.log("Total")
        console.log(this.total);
      }
    }catch(ex){
      console.log(ex);
    }
  }

  fnRealizarPago(){
    try{
      this.mensajeDePago ="";
      this.productos = this._DataService.fnGetProductosDB();
      this._httpService.getDatos()
        .subscribe(
          (data: Response) =>{
            data[1]= this.productos;
            console.log("Datos nuevos");
            console.log(data);
            this._httpService.putDatos(data)
              .subscribe(
                (dataPut: Response) =>{
                  console.log(dataPut);
                  this._DataService.fnLimpiarCarritoDeCompras();
                  this.total =0;
                  this.mensajeDePago ="El Pago se ha realizado correctamente. Muchas gracias!";
                } 
            )//./subcribe
          } 
      )//./subcribe
    }catch(ex){

    }
  }

}
