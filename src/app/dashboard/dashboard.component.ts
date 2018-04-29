//Librerias de angular
import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';

//Modelos
import { Producto } from '../models/producto';

//Servicios
import { HttpService } from '../services/http.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [HttpService, DataService]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }// ./ngOnInit
}


