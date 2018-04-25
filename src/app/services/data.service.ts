import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from './http.service';

//Importando los modelos
import { Usuario } from '../models/usuario';
import { Producto } from '../models/producto';

@Injectable()
export class DataService {
  private usuario : Usuario;
  private usuarios : Usuario[];

  private producto : Producto;
  private productos  : Producto[];

  //private data : Object({usuarios, productos});
  


  constructor(private _httpService : HttpService){ }

  fnIniciarSesion(): string{
    this._httpService.getDatos()

      .subscribe(
        (data: Response) =>{
          console.log(data)
        } 
      )

      return "Respuesta";
  } 

}
