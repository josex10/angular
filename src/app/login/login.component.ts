//Librerias de angular
import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';

//Modelos
import { Usuario } from '../models/usuario';

//Servicios
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [HttpService]
})
export class LoginComponent implements OnInit {

  private usuario : Usuario = {nombre : "", contrasena : ""};
  private usuarios : Usuario[];
  private mensaje : string = "Hola esto es una prueba";
  private existenErrores : boolean = false;

  constructor(private _httpService : HttpService, private router: Router) {

  }

  ngOnInit() {
  }

  onSubmit(f : NgForm){
    try{
      this.existenErrores = false;
      this.usuario.nombre = f.control.value.loginFormUserName;
      this.usuario.contrasena = f.control.value.loginFormPassword;

      if(this.usuario.nombre == ""){
        this.mensaje = "El nombre de usuario es requerido.";
        this.existenErrores = true;
      }else if(this.usuario.contrasena == ""){
        this.mensaje = "La contraseña es requerida.";
        this.existenErrores = true;
      }else{
        this._httpService.getDatos()
          .subscribe(
            (data: Response) =>{

              //Recibimos los usuarios
              this.usuarios = data[0];

              //Recorremos los usuarios
              for(var i  = 0 ;  i < this.usuarios.length; i++){

                //Validamos si coincide el nombre de usuario
                if(this.usuarios[i].nombre == this.usuario.nombre){

                  //Si el nombre de usuario consiste validamos la contrasena
                  if(this.usuarios[i].contrasena == this.usuario.contrasena){

                    //Si la contrasena es correcta nos dirigimos a la aplicacion
                    this.router.navigate(['/dashboard']);
                    break;

                  }else{
                    //enviamos un mensaje de error al usuario debido a que la contrasena no es la correcta
                    this.existenErrores = true;
                    this.mensaje = "La contraseña es incorrecta.";
                  }
                }else{
                  //enviamos un mensaje al usuario debido a que el usuario ingresado no existe
                  this.existenErrores = true;
                  this.mensaje = "El usuario no existe.";
                }
              }
            } 
          )//./subcribe
        }// ./else
    }catch(ex){
      console.log(ex);
    }

  }

}
