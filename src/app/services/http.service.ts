import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http : Http) { }

  getDatos(){
    return this.http.get('https://exam-4dd06.firebaseio.com/.json')
      .map((response: Response)=> response.json())
  }

  putDatos(data){
    let datos = JSON.stringify(data);
  	return this.http.put('https://exam-4dd06.firebaseio.com/.json', datos).map((response: Response) => response.json());
  }

}
