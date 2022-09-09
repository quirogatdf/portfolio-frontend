import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }
  getAll():Observable<any>{ 
    return this.http.get('../assets/data/data.json')
    //console.log('El servicio portfolio esta corriendo');
  }
}