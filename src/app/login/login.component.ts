import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DataService]
})
export class LoginComponent implements OnInit {
  usuarios : string[] = [];

  constructor(private _dataService : DataService) { }

  ngOnInit() {
  }

  onSubmit(f : NgForm){

    try{
      this._dataService.fnIniciarSesion();
    }catch(ex){
      console.log(ex);
    }

  }

}
