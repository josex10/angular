//Librerias de angular
import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';

//Modelos
import { Producto } from '../models/producto';

//Servicios
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  private producto : Producto = {nombre : "", cantidad : 0, precio : 0, imagen : ""};
  private productos : Producto[];

  constructor(private _DataService : DataService, private _Router: Router) { }

  ngOnInit() {
    this.producto = this._DataService.fnGetProductoParaVista();
    if(this.producto === void 0){
      this._Router.navigate(['/dashboard/catalog']);
    }
  }

  fnVolverAlCatalogo(){
    this._Router.navigate(['/dashboard/catalog']);
  }

}
